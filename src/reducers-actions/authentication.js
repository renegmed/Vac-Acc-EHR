import Web3 from 'web3';
import IPFS from 'ipfs-mini';
import Stow from '@stowprotocol/stow-js';
import config from '../config';

export const types = {
    AUTHENTICATE: 'AUTHENTICATE',
    AUTHENTICATE_SUCCESS: 'AUTHENTICATE_SUCCESS',
    AUTHENTICATE_FAILURE: 'AUTHENTICATE_FAILURE', 
}

export const NO_METAMASK = 'NO_METAMASK';
export const LOCKED_METAMASK = 'LOCKED_METAMASK';
export const STOW_MISCONFIGURED = 'STOW_MISCONFIGURED';
export const IPFS_MISCONFIGURED = 'IPFS_MISCONFIGURED';

const INITIAL_STATE = {
    web3: null,
    stow: null,
    ipfs: null,
    loading: false, 
    isAuthenticated: false,
    authError: '',
};


export function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case types.AUTHENTICATE:
        //const { web3, ipfs, stow } = action; 
        return {
          ...state,
          loading: true, 
          isAuthenticated: false,
          authError: '',
        };   
      case types.AUTHENTICATE_SUCCESS:
        //const { web3, ipfs, stow } = action; 
        return {
          ...state,
          loading: false,
          web3: action.web3,
          ipfs: action.ipfs,
          stow: action.stow,
          isAuthenticated: true,
          authError: '',
        }; 
      case types.AUTHENTICATE_FAILURE:
        const { authError, isAuthenticated } = action;
       // console.log("authError", authError);
        return {
          ...state,
          loading: false,
          isAuthenticated,
          authError,
        };   
      default:
        return state;
    }
}

const hubAddress = config.STOW_HUB_ADDRESS;
const protocol = config.STOW_IPFS_PROTOCOL;
const port = config.STOW_IPFS_PORT;
const host = config.STOW_IPFS_HOST;


const getWeb3 = () => {
  return new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener('load', async dispatch => {
      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      if (typeof window.web3 !== 'undefined') {
        // Use Mist/MetaMask's provider.
        resolve(new Web3(window.web3.currentProvider));
      } else {
        reject(NO_METAMASK);
      }
    });
  });
};

const authFailure = authError => ({
  type: types.AUTHENTICATE_FAILURE,
  isAuthenticated: false,
  authError,
});

export const actions = {
    authenticate() {
      return async function (dispatch, getState) {
        dispatch({
          type: types.AUTHENTICATE,
        });


        /*
          First, we check to see that web3 has been injected into the browser window. This will most likely
          be done by the MetaMask browser extension, but could be another extension or browser.
        */
        let web3;

        try {
          web3 = await getWeb3();
        } catch (e) {
          return dispatch(authFailure(NO_METAMASK)); 
        }
        
        /*
          Next, we make sure that the user has logged into MetaMask. We get the first account address,
          then check that it exists. It will be undefined if the user's MetaMask is locked.
        */
        const accounts = await web3.eth.getAccounts();

        const address = accounts[0];
        console.log("[authentication] accounts[0]", address);

        if (!address) {
          console.error('[authentication] Metamask is locked. Please install and login to Metamask!');
          return dispatch(authFailure(LOCKED_METAMASK)); 
        }

        /*
          Next, we make sure the IPFS has been properly configured and can be connected to. This is 
          a developer check rather than a user authentication check.
        */

        const ipfs = new IPFS({ host: host, port: port, protocol: protocol });

        try {
            //TODO Ping IPFS to check connection
            // Will try http://github.com/danielzzz/node-ping  or
            // net-ping later  
        } catch (e) {
          console.error('[authentication] IPFS is not configured correctly!');
          return dispatch(authFailure(IPFS_MISCONFIGURED));
        }

        /*
          Finally, we make sure that we are able to connect to the Stow Smart contracts. We use 
          Web3 to ping the contract address. If we receive and empty hex, we have provided the wrong
          hub address. This is another developer check.
        */
        console.log("hubAddress:", hubAddress);
        const code = await web3.eth.getCode(hubAddress);
        if (!code || code ==='0x0' || code === '0x') {
          console.error('[authentication] Stow is not configured correctly!');
          return dispatch(authFailure(STOW_MISCONFIGURED));
        }

        const stow = new Stow(web3, { hubAddress });

        return dispatch({
          type: types.AUTHENTICATE_SUCCESS,
          web3,
          ipfs,
          stow,
        }); 
      };
    },
};
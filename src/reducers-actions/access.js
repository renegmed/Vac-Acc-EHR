export const types = {  
    GRANT_ACCESS: 'GRANT_ACCESS',
    GRANT_ACCESS_SUCCESS: 'GRANT_ACCESS_SUCCESS',
    GRANT_ACCESS_FAILURE: 'GRANT_ACCESS_FAILURE', 
};

const INITIAL_STATE = {
    dataHash: "", 
    provider: "", 
    ipfsHash: "", 
    userAddr: "",
    error: "",
};


export function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case types.GRANT_ACCESS:
        return state; 
      case types.GRANT_ACCESS_SUCCESS: 
          return state; 
      case types.GRANT_FAILURE:
          return state;   
      default:
        return state;
    }
}

export const actions = { 
    grantAccess(dataHash, provider, ipfsHash, userAddr) {
        return {
          type: types.GRANT_ACCESS,
          payload: {
            dataHash, 
            provider, 
            ipfsHash, 
            userAddr
          },
        };
    },    
};    
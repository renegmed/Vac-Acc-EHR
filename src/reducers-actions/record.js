export const types = {  
    ADD_RECORD: 'ADD_RECORD',
    ADD_RECORD_SUCCESS: 'ADD_RECORD_SUCCESS',
    ADD_RECORD_FAILURE: 'ADD_RECORD_FAILURE', 
};

const INITIAL_STATE = {
    owner: null,
    dataformat: null,
    domain: null,
    storage: null, 
    encryptionScheme: "x25519-xsalsa20-poly1305",
    encryptionPublicKey: "",
    stowjsVersion: "0.2.1",
    providerName: null,
    providerEthereumAddress: null,
    keywords: null,
    timeframe: null,
    datauri: null,
    error: '',
};


export function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case types.ADD_RECORD:
        return state; 
      case types.ADD_RECORD_SUCCESS: 
          return state; 
      case types.ADD_RECORD_FAILURE:
          return state;   
      default:
        return state;
    }
}

export const actions = { 
    addRecord(recordData) {
        return {
          type: types.ADD_RECORD,
          payload: recordData,
        };
    },
};    
     
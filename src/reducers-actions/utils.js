export const types = {  
    GENERATE_KEYS: 'GENERATE_KEYS',
    GENERATE_KEYS_SUCCESS: 'GENERATE_KEYS_SUCCESS',
    GENERATE_KEYS_FAILURE: 'GENERATE_KEYS_FAILURE',
    ENCRYPT_DATA: 'ENCRYPT_DATA',
    ENCRYPT_DATA_SUCCESS: 'ENCRYPT_DATA_SUCCESS',
    ENCRYPT_DATA_FAILURE: 'ENCRYPT_DATA_FAILURE',
    DECRYPT_DATA: 'DECRYPT_DATA',
    DECRYPT_DATA_SUCCESS: 'DECRYPT_DATA_SUCCESS',
    DECRYPT_DATA_FAILURE: 'DECRYPT_DATA_FAILURE',   
};

const INITIAL_STATE = { 
    error: "",
};


export function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case types.GENERATE_KEYS:
        return state; 
      case types.GENERATE_KEYS_SUCCESS: 
          return state; 
      case types.GENERATE_KEYS_FAILURE:
          return state;   
      case types.ENCRYPT_DATA:
          return state; 
      case types.ENCRYPT_DATA_SUCCESS: 
          return state; 
      case types.ENCRYPT_DATA_FAILURE:
          return state; 
      case types.DECRYPT_DATA:
          return state; 
      case types.DECRYPT_DATA_SUCCESS: 
          return state; 
      case types.DECRYPT_DATA_FAILURE:
          return state;       
      default:
        return state;
    }
}

export const actions = { 
    generateKeys() {
        return {
          type: types.GENERATE_KEYS,
          payload: {},
        };
    },
    encryptData() {
        return {
          type: types.ENCRYPT_DATA,
          payload: {},
        };
    },
    decryptData() {
        return {
          type: types.DECRYPT_DATA,
          payload: {},
        };
    },      
};    
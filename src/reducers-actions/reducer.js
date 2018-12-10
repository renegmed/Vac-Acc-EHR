import { combineReducers } from 'redux';
import { reducer as authReducer } from './authentication';
import { reducer as accessReducer } from './access';
import { reducer as utilsReducer } from './utils';

const reducer = combineReducers({
  auth: authReducer,
  access: accessReducer, 
  utils: utilsReducer, 
});

export default reducer;
  
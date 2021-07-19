import { combineReducers } from 'redux';
import userReducer from './User/User.Reducer';

export default combineReducers({
  user: userReducer
});

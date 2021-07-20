import { combineReducers } from 'redux';
import userReducer from './User/User.Reducer';
import CartReducer from './Cart/Cart.Reducer';

export default combineReducers({
  user: userReducer,
  cart: CartReducer
});

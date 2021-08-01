import React from 'react';
import './Cart-Dropdown.styles.scss';
import CustomButton from '../Custom-Button/Custom-Button.component';
import { connect } from 'react-redux';
import CartItem from '../Cart-Item/Cart-Item.component';
import { selectCartItems } from '../../Redux/Cart/Cart.selectors';
import {withRouter} from 'react-router-dom';

const CartDropdown = ({ cartItems,history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
    {
      cartItems.length?
    cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      )):
      <span className='error-message'>The cart is empty.</span>
      }
    </div>
    <CustomButton onClick={()=>history.push('/checkout')}>Go to Checkout</CustomButton>
  </div>
);
const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});
export default withRouter(connect(mapStateToProps)(CartDropdown)) ;

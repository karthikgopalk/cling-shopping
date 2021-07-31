import React from 'react';
import './Cart-Dropdown.styles.scss';
import CustomButton from '../Custom-Button/Custom-Button.component';
import { connect } from 'react-redux';
import CartItem from '../Cart-Item/Cart-Item.component';
import { selectCartItems } from '../../Redux/Cart/Cart.selectors';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
    {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);
const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});
export default connect(mapStateToProps)(CartDropdown);

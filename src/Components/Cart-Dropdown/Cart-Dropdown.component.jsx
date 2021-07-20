import React from 'react';
import './Cart-Dropdown.styles.scss';
import CustomButton from '../Custom-Button/Custom-Button.component';
const CartDropdown = () => (
<div className='cart-dropdown'>
  <div className='cart-items'/>
  <CustomButton>Checkout</CustomButton>
</div>
);
export default CartDropdown;
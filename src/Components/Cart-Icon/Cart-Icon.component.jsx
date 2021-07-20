import React from 'react'
import './Cart-Icon.styles.scss'

const CartIcon = () => {
  return (
    <div className='cart-icon'>
      <img
        className="shopping-icon"
        src="https://www.svgrepo.com/show/105096/shopping-bag.svg"
        alt="cart icon"
      />
      <span className='item-count'>1</span>
    </div>
  )
};
export default CartIcon;
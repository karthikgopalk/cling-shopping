import React from 'react';
import './Cart-Icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/Cart/Cart.Action.js';
import { selectCartItemsCount } from '../../Redux/Cart/Cart.selectors';
const CartIcon = ({toggleCartHidden,itemCount}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <img
        className="shopping-icon"
        src="https://www.svgrepo.com/show/105096/shopping-bag.svg"
        alt="cart icon"
      />
    <span className='item-count'>{itemCount}</span>
    </div>
  );
};
const mapDispathToProps = dispatch => ({
  toggleCartHidden: () => {
    dispatch(toggleCartHidden());
  }
});
const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});
export default connect(
  mapStateToProps,
  mapDispathToProps
)(CartIcon);

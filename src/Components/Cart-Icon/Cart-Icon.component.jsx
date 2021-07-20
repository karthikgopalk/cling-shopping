import React from 'react';
import './Cart-Icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/Cart/Cart.Action.js';
const CartIcon = ({toggleCartHidden}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <img
        className="shopping-icon"
        src="https://www.svgrepo.com/show/105096/shopping-bag.svg"
        alt="cart icon"
      />
      <span className="item-count">1</span>
    </div>
  );
};
const mapDispathToProps = dispatch => ({
  toggleCartHidden: () => {
    dispatch(toggleCartHidden());
  }
});
export default connect(
  null,
  mapDispathToProps
)(CartIcon);

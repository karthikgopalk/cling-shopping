import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { Logo } from '../../Assets/crown.svg';
import { auth } from '../../Firebase/Firebase.utils';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-cantainer" to="/">
      <img
        className="logo"
        src="https://www.freepnglogos.com/uploads/crown-png/crown-transparent-png-pictures-icons-and-png-40.png"
        alt="header icon"
      />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;

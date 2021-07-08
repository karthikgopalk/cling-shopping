import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/crown.svg';

const Header = () => (
  <div className="header">
     <Link className="logo-cantainer" to="/">
     <img className='logo' src="https://www.freepnglogos.com/uploads/crown-png/crown-transparent-png-pictures-icons-and-png-40.png"  alt="crown icon" />
  

    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link> 
    </div> 
  </div>
);

export default Header;

import React from 'react';
import './style.css';
import Header from './Components/Header/Header.component';
import HomePage from './Components/Pages/Homepage/HomePage.component';
import ShopPage from './Components/Pages/Shop/Shop.component';
import SignInAndSignUp from './Components/Pages/Shop/sign-in-and-sign-up/Sign-In-and-Sign-Up.component';

import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />

      </Switch>
    </div>
  );
}

export default App;
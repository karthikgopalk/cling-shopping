import React from 'react';
import './style.css';
import Header from './Components/Header/Header.component';
import HomePage from './Components/Pages/Homepage/HomePage.component';
import ShopPage from './Components/Pages/Shop/Shop.component';
import SignInAndSignUp from './Components/Pages/Shop/sign-in-and-sign-up/Sign-In-and-Sign-Up.component';
import { auth } from './Firebase/Firebase.utils';

import { Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

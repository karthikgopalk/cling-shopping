import React from 'react';
import './style.css';
import Header from './Components/Header/Header.component';
import HomePage from './Components/Pages/Homepage/HomePage.component';
import ShopPage from './Components/Pages/Shop/Shop.component';
import SignInAndSignUp from './Components/Pages/Shop/sign-in-and-sign-up/Sign-In-and-Sign-Up.component';
import { auth, createUserProfileDocument } from './Firebase/Firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/User.Action';

import { Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
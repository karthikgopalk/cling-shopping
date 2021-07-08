import React from 'react';
import './style.css';
import HomePage from './Components/Pages/Homepage/HomePage.component';
import ShopPage from './Components/Pages/Shop/Shop.component';

import { Route, Switch, Link } from 'react-router-dom';

const hatsPage = props => {
  console.log(props);
  return (
    <div>
      <Link to="/jacketPage">Jacket Page</Link>
      <h1>Hats Page</h1>
    </div>
  );
};

const jacketPage = props => {
  console.log(props);
  return (
    <div>
      <h1>Jacket Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
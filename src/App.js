import React from 'react';
import './style.css';
import HomePage from './Components//Pages/Homepage/HomePage.component';
import { Route } from 'react-router-dom';

const hatsPage = () => {
  <div>
    <h1>Hats Page</h1>
  </div>;
};
function App() {
  return (
    <div>
      <Route exact route="/" component={HomePage} />
    </div>
  );
}

export default App;

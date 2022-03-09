import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component.jsx"
import Header from "./components/header/header.component.jsx"
import './App.css';


function App() {
  return (
    <div className="">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>

     </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component"
import { Switch, Route } from 'react-router-dom';


const HatsPage = () => {

  return (<div className="">
    <h1 className=""> HATSPAGE </h1>
  </div>)
}

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>

     </div>
    // <HomePage> </HomePage>
  );
}

export default App;

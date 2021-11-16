import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Navbar from "./Components/Navbar";
import Calculater from "./Components/Claculater";
import Weather from "./Components/Weather";
import TodoApp from "./Components/TodoApp";
import Hangman from "./Components/Hangman";
import Login from "./Components/Login";
import SignUpForm from "./Components/SignUpForm";
import Coins from "./Components/Coins";

//Context
import CryptoContext from "./Components/CryptoContext";
const App = () => {
  return (
    <div>
      <Navbar />
      <CryptoContext>
        <Switch>
          <Route path="/Coins" component={Coins} />
          <Route path="/Calculater" component={Calculater} />
          <Route path="/Weather" component={Weather} />
          <Route path="/TodoApp" component={TodoApp} />
          <Route path="/Signup" component={SignUpForm} />
          <Route path="/Login" component={Login} />
          <Redirect to="/Calculater" />
        </Switch>
      </CryptoContext>
    </div>
  );
};

export default App;

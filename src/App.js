import React from 'react';
import Navbar from './Components/Navbar';
import Calculater  from './Components/Claculater';
import Weather from './Components/Weather';
import { Redirect, Route, Switch } from 'react-router';
import TodoApp from './Components/TodoApp';
const App = () => {
  return (
    <div>
        <Navbar/> 
      
      <Switch>
        <Route path="/Calculater" component={Calculater}/>
        <Route path='/Weather' component={Weather}/>
        <Route path="/TodoApp" component={TodoApp}/>
        <Redirect to="/Calculater"/>
      </Switch>

    </div>
  );
};

export default App;

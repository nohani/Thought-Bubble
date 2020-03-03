import React from "react";
import SignupContainer from './session/signup_container';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import LoginContainer from './session/login_container';
import SplashContainer from "./splash/splash_container";
import Dashboard from "./dashboard/dashboard"

const App = () => {
  return (
    <div>
      <NavBarContainer />
    <h1>Welcome!</h1>
    <Switch>
      <Route path="/dashboard" component={Dashboard} /> 
      <Route path="/login" component={LoginContainer} /> 
      <Route path="/signup" component={SignupContainer} />
      <Route path="/" component={SplashContainer}/>
    </Switch>
    </div>
  )
}

export default App;

//authroute => dashboard
//logged out => splash/login/signup pages
import React from "react";
import SignupContainer from './session/signup_container';
import { Route, Switch } from 'react-router-dom';
// import NavBarContainer from './navbar/navbar_container';
import LoginContainer from './session/login_container';
import SplashContainer from "./splash/splash_container";
import Dashboard from "./dashboard/dashboard";
import {AuthRoute, ProtectedRoute } from "../utils/route_utils"

const App = () => {
  return (
    <div>
      {/* <NavBarContainer /> */}
    <Switch>
      <ProtectedRoute path="/dashboard" component={Dashboard} /> 
      <AuthRoute path="/login" component={LoginContainer} /> 
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/" component={SplashContainer}/>
    </Switch>
    </div>
  )
}

export default App;

//authroute => dashboard
//logged out => splash/login/signup pages
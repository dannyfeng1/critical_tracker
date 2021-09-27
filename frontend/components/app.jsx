import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';
import LogInSignUpContainer from '../components/user_auth/login_signup_container'
import LoginFormContainer from '../components/user_auth/login_form_container';
import SignUpFormContainer from '../components/user_auth/signup_form_container';
import DemoContainer from '../components/user_auth/demo_container'
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
import Dashboard from './dashboard/dashboard';
import RoutingError from './routing_error'

const App = () => (
  <div>
    <NavBarContainer />

    <Switch>
      <ProtectedRoute path="/dashboard" component={Dashboard}/>
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/demo" component={DemoContainer} />
      <Route exact path="/" component={LogInSignUpContainer}/>
      <Route component={RoutingError} />
    </Switch>

  </div>
)

export default App;
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
import ModalContainer from './modals/modal_container';
import ProjectContainer from './projects/projects_container';
import MembersContainer from './projects/members_container';

const App = () => (
  <div>
    <NavBarContainer />
    <ModalContainer />

    <Switch>
      <ProtectedRoute path="/dashboard" component={Dashboard}/>
      <ProtectedRoute path="/projects/:projectId/members" component={MembersContainer}/>
      <ProtectedRoute path="/projects/:projectId" component={ProjectContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/demo" component={DemoContainer} />
      <AuthRoute exact path="/" component={LogInSignUpContainer}/>
      <Route component={RoutingError} />
    </Switch>

  </div>
)

export default App;
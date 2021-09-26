import React from 'react';
import { Route } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';
// import LoginFormContainer from './session_forms/login_form_container';
// import SignUpFormContainer from './session_forms/signup_form_container';
// import AuthRoute from '../util/route_util'

const App = () => (
  <div>
    <NavBarContainer />
    {/* <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <Route exact path="/" component={SearchContainer} /> */}
  </div>
)

export default App;
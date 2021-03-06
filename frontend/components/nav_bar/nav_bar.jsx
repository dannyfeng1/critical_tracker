import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import LogInSignUpContainer from '../user_auth/login_signup_container'


class NavBar extends React.Component {
  
  render() {
    let { currentUser, logout } = this.props;

    let buttons = null;
    let username = null;
    if (currentUser) {
      buttons = (
        <button onClick={() => logout()}>Log Out</button>
      )
      username = (<p>{currentUser.username}</p>)
    }

    return (
    <header id="nav-bar">
      <div id="logo-name">
        <Link to="/">
          <img src="https://cdn0.iconfinder.com/data/icons/esports-wildberry-vol-1/256/Critical_Damage-512.png" height="25px" width="25px" alt="" />
        </Link>
        <Link to="/">
          CriticalTracker
        </Link>
        <Link to="/">
          <span className="material-icons">home</span>
        </Link>
      </div>
      <div id="nav-bar-items">
        {username}
        {/* search bar for projects on dashboard page and stories on projects page*/}
        {buttons}
      </div>
      <LogInSignUpContainer />
    </header>
    )
  }
}

export default withRouter(NavBar);
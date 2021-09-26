import React from 'react';
import { withRouter } from 'react-router';

class NavBar extends React.Component {
  
  render() {
    let { currentUser, logout } = this.props;
    console.log(currentUser)

    let buttons;
    if (currentUser) {
      buttons = (
        <div>
          <p>{currentUser.first_name + " " + currentUser.last_name}</p>
          <button onClick={() => logout()}>Log Out</button>
        </div>
      )
    } else {
      buttons = (
        <div>
          <button onClick={() => this.props.history.push('/signup')}>Sign Up</button>
          <button onClick={() => this.props.history.push('/login')}>Log In</button>
        </div>
      )
    }
    return (
    <header id="nav-bar">
      <img src="https://cdn0.iconfinder.com/data/icons/esports-wildberry-vol-1/256/Critical_Damage-512.png" height="50px" width="50px" alt="" />
      <div>
        <p>Dashboard</p>
        <p>Search Bar</p>
        {buttons}
      </div>
    </header>
    )
  }
}

export default withRouter(NavBar);
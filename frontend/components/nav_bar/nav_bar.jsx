import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  
  render() {
    let { currentUser, logout } = this.props;

    let buttons = null;
    let searchBar = null;
    let dashboard = null;
    if (currentUser) {
      buttons = (
        <div>
          <p>{currentUser.username}</p>
          <button onClick={() => logout()}>Log Out</button>
        </div>
      )
      searchBar = (
        <p>Search Bar</p>
      )
      dashboard = (
        <p>Dashboard</p>
      )
    }
    return (
    <header id="nav-bar">
      <div>
        <Link to="/">
          <img src="https://cdn0.iconfinder.com/data/icons/esports-wildberry-vol-1/256/Critical_Damage-512.png" height="25px" width="25px" alt="" />
        </Link>
        <Link to="/">
          <p>CriticalTracker</p>
        </Link>
      </div>
      {dashboard}
      {searchBar}
      {buttons}
    </header>
    )
  }
}

export default withRouter(NavBar);
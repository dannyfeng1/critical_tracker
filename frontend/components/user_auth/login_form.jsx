import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.userForm;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(this.props.history.push("/dashboard"))
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }
  
  componentWillUnmount() {
    this.props.clearErrors();
  }

  demoLogin() {
    this.props.login({
      username: "Demo_User",
      password: "demo123"
    });
  }


  render() {
    let { username, password} = this.state;

    return (
      <div id="login-container">
        <h1>Log In</h1>
        <form className="user-form" onSubmit={this.handleSubmit}>
          <input placeholder="Username" onChange={this.update("username")}type="text" value={username} />
          <input placeholder="Password" onChange={this.update("password")}type="password" value={password} />
          <ul className="errors">
            {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
          <button>Log In</button>
          <button onClick={this.demoLogin}>Demo</button>
          <Link to="/signup">Sign Up</Link>
        </form>
      </div>
    )
  }
}

export default withRouter(LogInForm)
import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      first_name: "",
      last_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.props.history.push("/dashboard"))
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  demoLogin() {
    this.props.login({
      username: "Demo_User",
      password: "demo123"
    });
  }

  render() {
    let { email, password, username, first_name, last_name} = this.state;
    return (
      <div id="signup-container">
        <h1>Sign Up</h1>
        <form className="user-form" onSubmit={this.handleSubmit}>
          <input placeholder="Email" onChange={this.update("email")} type="text" value={email} />
          <input placeholder="Username" onChange={this.update("username")}type="text" value={username} />
          <input placeholder="Password" onChange={this.update("password")}type="password" value={password} />
          <input placeholder="First Name" onChange={this.update("first_name")}type="text" value={first_name} />
          <input placeholder="Last Name" onChange={this.update("last_name")}type="text" value={last_name} />
          <ul className="errors">
            {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
          <button>Sign Up</button>
          <button onClick={this.demoLogin}>Demo</button>
          <Link to="/login">Log In</Link>
        </form>
      </div>
    )
  }
}

export default withRouter(SignUpForm);
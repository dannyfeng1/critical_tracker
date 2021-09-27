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
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      // .then(this.props.history.push("/"))
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render() {
    let { email, password, username, first_name, last_name} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input onChange={this.update("email")}type="text" value={email} />
          </label>
          <label>Password:
            <input onChange={this.update("password")}type="password" value={password} />
          </label>
          <label>Username:
            <input onChange={this.update("username")}type="text" value={username} />
          </label>
          <label>First Name:
            <input onChange={this.update("first_name")}type="text" value={first_name} />
          </label>
          <label>Last Name:
            <input onChange={this.update("last_name")}type="text" value={last_name} />
          </label>
          <button>Sign Up</button>
          <Link to="/login">Log In</Link>
        </form>
        <div className="errors">
          {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
        </div>
      </div>
    )
  }
}

export default withRouter(SignUpForm);
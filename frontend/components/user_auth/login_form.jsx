import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.userForm;
    this.handleSubmit = this.handleSubmit.bind(this);
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


  render() {
    let { username, password} = this.state;

    return (
      <div>
        <form id="signup-form" onSubmit={this.handleSubmit}>
          <label>Username:
            <input onChange={this.update("username")}type="text" value={username} />
          </label>
          <label>Password:
            <input onChange={this.update("password")}type="password" value={password} />
          </label>
          <button>Log In</button>
          <Link to="/signup">Sign Up</Link>
        </form>
        <div className="errors">
          {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
        </div>
      </div>
    )
  }
}

export default withRouter(LogInForm)
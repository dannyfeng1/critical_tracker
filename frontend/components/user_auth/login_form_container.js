import { connect } from "react-redux";
import { login } from "../../actions/session";
import LogInForm from './login_form';

const mapStateToProps = state => ({
  userForm: {
    username: "",
    password: ""
  }
})

const mapDispatchToProps = dispatch => ({
  login: (userForm) => dispatch(login(userForm))
})

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
import { connect } from "react-redux";
import { login, clearSessionErrors } from "../../actions/session";
import LogInForm from './login_form';

const mapStateToProps = state => ({
  userForm: {
    username: "",
    password: ""
  },
  errors: state.ui.errors.sessionErrors
})

const mapDispatchToProps = dispatch => ({
  login: (userForm) => dispatch(login(userForm)),
  clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
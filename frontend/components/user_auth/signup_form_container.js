import { connect } from "react-redux";
import { signup, clearSessionErrors, login } from "../../actions/session";
import SignUpForm from "./signup_form"

const mapStateToProps = state => ({
  errors: state.ui.errors.sessionErrors
})

const mapDispatchToProps = dispatch => ({
  signup: (userForm) => dispatch(signup(userForm)),
  clearErrors: () => dispatch(clearSessionErrors()),
  login: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
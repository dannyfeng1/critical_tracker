import { connect } from "react-redux";
import { signup } from "../../actions/session";
import SignUpForm from "./signup_form"

const mapDispatchToProps = dispatch => ({
  signup: (userForm) => dispatch(signup(userForm))
})

export default connect(null, mapDispatchToProps)(SignUpForm);
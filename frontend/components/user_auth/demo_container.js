import { connect } from "react-redux";
import { login, clearSessionErrors } from "../../actions/session";
import LogIn from './login_form'

const mapStateToProps = state => ({
  userForm: {
    username: "DemoUser",
    password: "demo123"
  },
  errors: []
})

const mapDispatchToProps = dispatch => ({
  login: (userForm) => dispatch(login(userForm)),
  clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
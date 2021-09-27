import { connect } from "react-redux";
import LogIn from './login_form'

const mapStateToProps = state => ({
  userForm: {
    username: "DemoUser",
    password: "demo123"
  }
})

const mapDispatchToProps = dispatch => ({
  login: (userForm) => dispatch(login(userForm))
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
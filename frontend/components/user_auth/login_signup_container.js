import { connect } from "react-redux";
import LogInSignUp from "./login_signup";

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser
})

export default connect(mapStateToProps)(LogInSignUp)
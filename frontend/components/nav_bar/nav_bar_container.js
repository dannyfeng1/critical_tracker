import { connect } from "react-redux";
import { logout } from "../../actions/session";
import NavBar from './nav_bar'

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUser]
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

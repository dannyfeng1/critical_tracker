import { connect } from "react-redux";
import { openModal } from "../../actions/modal";
import { getUserProjects } from "../../actions/projects";
import { getCurrentUser } from "../../actions/session";
import MyProjects from "./my_projects";

const mapStateToProps = state => ({
  projects: Object.values(state.entities.projects)
})

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(getUserProjects()),
  openModal: (type) => dispatch(openModal(type)),
  getCurrentUser: () => dispatch(getCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);
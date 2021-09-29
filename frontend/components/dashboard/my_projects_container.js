import { connect } from "react-redux";
import { openModal } from "../../actions/modal";
import { getUserProjects, deleteProject, createNewProject } from "../../actions/projects";
import MyProjects from "./my_projects";

const mapStateToProps = state => ({
  projects: Object.values(state.entities.projects)
})

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(getUserProjects()),
  openModal: (type) => dispatch(openModal(type)),
  createProject: (project) => dispatch(createNewProject(project))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);
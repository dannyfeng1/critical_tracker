import { connect } from "react-redux";
import CreateProjectForm from "./create_project_form";
import { createNewProject } from '../../actions/projects'


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  createProject: (project) => dispatch(createNewProject(project))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm);
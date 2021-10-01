import { connect } from "react-redux";
import CreateProjectForm from "./create_project_form";
import { clearProjectErrors, createNewProject } from '../../actions/projects'


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.ui.errors.projectErrors
})

const mapDispatchToProps = dispatch => ({
  createProject: (project) => dispatch(createNewProject(project)),
  clearErrors: () => dispatch(clearProjectErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm);
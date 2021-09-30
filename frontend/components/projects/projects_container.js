import { connect } from "react-redux";
import Project from './project'
import { fetchMembers, getProject } from "../../actions/projects";

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId],
  projectId: ownProps.match.params.projectId,
  members: Object.values(state.entities.users)
})

const mapDispatchToProps = dispatch => ({
  fetchMembers: (projectId) => dispatch(fetchMembers(projectId)),
  getProject: (projectId) => dispatch(getProject(projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Project)
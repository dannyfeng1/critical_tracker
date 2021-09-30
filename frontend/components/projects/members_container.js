import { connect } from "react-redux";
import { fetchMembers, getProject, addProjectMember } from "../../actions/projects";
import Members from './members'

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId],
  members: Object.values(state.entities.users),
  projectId: ownProps.match.params.projectId,
})

const mapDispatchToProps = dispatch => ({
  fetchMembers: (projectId) => dispatch(fetchMembers(projectId)),
  addProjectMember: (form) => dispatch(addProjectMember(form)),
  getProject: (projectId) => dispatch(getProject(projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Members)
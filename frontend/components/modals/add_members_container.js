import { connect } from "react-redux";
import { addProjectMember } from "../../actions/projects";
import { getProject } from "../../actions/projects";
import AddMembersForm from "./add_members";


const mapStateToProps = (state, ownProps) => ({
  projectId: ownProps.match.params.projectId,
  project: state.entities.projects[ownProps.match.params.projectId],
})

const mapDispatchToProps = dispatch => ({
  addProjectMember: (form) => dispatch(addProjectMember(form)),
  getProject: (projectId) => dispatch(getProject(projectId))

})

export default connect(mapStateToProps, mapDispatchToProps)(AddMembersForm)
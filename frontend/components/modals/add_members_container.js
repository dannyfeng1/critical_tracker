import { connect } from "react-redux";
import { addProjectMember, clearMemberMessages } from "../../actions/projects";
import { getProject } from "../../actions/projects";
import AddMembersForm from "./add_members";
import { closeModal } from "../../actions/modal";


const mapStateToProps = (state, ownProps) => ({
  projectId: ownProps.match.params.projectId,
  project: state.entities.projects[ownProps.match.params.projectId],
  messages: state.ui.memberFormMessages
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addProjectMember: (form) => dispatch(addProjectMember(form)),
  getProject: (projectId) => dispatch(getProject(projectId)),
  closeModal: () => dispatch(closeModal()),
  clearMessages: () => dispatch(clearMemberMessages())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddMembersForm)
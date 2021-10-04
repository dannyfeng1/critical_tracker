import { connect } from "react-redux";
import { assignBacklogStory, clearStoryErrors, deleteStory, updateStory, assignIceboxStory } from "../../../actions/stories";
import EditStoryForm from "./edit_story_form";

const mapStateToProps = (state, ownProps) => ({
  story: ownProps.story,
  currentUser: state.entities.users[state.session.currentUser].username,
  teamMembers: Object.values(state.entities.users),
  formType: ownProps.formType
})

const mapDispatchToProps = dispatch => ({
  updateStory: (story) => dispatch(updateStory(story)),
  clearErrors: () => dispatch(clearStoryErrors()),
  deleteStory: (storyId) => dispatch(deleteStory(storyId)),
  assignBacklog: (storyId) => dispatch(assignBacklogStory(storyId)),
  assignIcebox: (storyId) => dispatch(assignIceboxStory(storyId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditStoryForm);
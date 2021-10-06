import { connect } from "react-redux";
import { assignBacklogStory, assignIceboxStory, clearStoryErrors, createNewStory } from "../../../actions/stories";
import StoryForm from "./story_form";

const mapStateToProps = (state, ownProps) => ({
  priority: true,
  currentUser: state.entities.users[state.session.currentUser],
  projectId: ownProps.projectId,
  formType: "My Work", 
  errors: state.ui.errors.storyErrors,
  display: true
})

const mapDispatchToProps = dispatch => ({
  createStory: story => dispatch(createNewStory(story)),
  clearErrors: () => dispatch(clearStoryErrors()),
  assignBacklog: (storyId) => dispatch(assignBacklogStory(storyId)),
  assignIcebox: (storyId) => dispatch(assignIceboxStory(storyId))
})

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);
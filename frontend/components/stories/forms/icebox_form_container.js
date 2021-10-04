import { connect } from "react-redux";
import { assignStory, clearStoryErrors, createNewStory } from "../../../actions/stories";
import StoryForm from "./story_form";

const mapStateToProps = (state, ownProps) => ({
  priority: false,
  currentUser: state.session.currentUser,
  projectId: ownProps.projectId,
  formType: "Icebox",
  teamMembers: Object.values(state.entities.users)
})

const mapDispatchToProps = dispatch => ({
  createStory: story => dispatch(createNewStory(story)),
  assignStory: storyId => dispatch(assignStory(storyId)),
  clearErrors: () => dispatch(clearStoryErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);
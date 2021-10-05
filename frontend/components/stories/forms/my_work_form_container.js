import { connect } from "react-redux";
import { clearStoryErrors, createNewStory } from "../../../actions/stories";
import StoryForm from "./story_form";

const mapStateToProps = (state, ownProps) => ({
  priority: true,
  currentUser: state.session.currentUser,
  projectId: ownProps.projectId,
  formType: "MyWork", 
  errors: state.ui.errors.storyErrors
})

const mapDispatchToProps = dispatch => ({
  createStory: story => dispatch(createNewStory(story)),
  clearErrors: () => dispatch(clearStoryErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);
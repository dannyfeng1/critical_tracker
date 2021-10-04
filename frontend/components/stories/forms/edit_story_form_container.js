import { connect } from "react-redux";
import { clearStoryErrors, deleteStory, updateStory } from "../../../actions/stories";
import EditStoryForm from "./edit_story_form";

const mapStateToProps = (state, ownProps) => ({
  story: ownProps.story,
  currentUser: state.entities.users[state.session.currentUser].username,
  teamMembers: Object.values(state.entities.users)
})

const mapDispatchToProps = dispatch => ({
  updateStory: (story) => dispatch(updateStory(story)),
  clearErrors: () => dispatch(clearStoryErrors()),
  deleteStory: (storyId) => dispatch(deleteStory(storyId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditStoryForm);
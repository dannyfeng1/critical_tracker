import { connect } from "react-redux";
import MyWork from "./myWork";

const mapStateToProps = (state, ownProps) => ({
  myWork: Object.values(state.entities.stories.myWork),
  currentUser: ownProps.currentUser,
  projectId: ownProps.projectId,
  presence: ownProps.presence
})

const mapDispatchToProps = dispatch => ({
  createStory: (story) => dispatch(createNewStory(story)),
  updateStory: (story) => dispatch(updateStory(story)),
  deleteStory: (storyId) => dispatch(deleteStory(storyId)),
  assignStory: (storyId) => dispatch(assignStory(storyId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyWork);
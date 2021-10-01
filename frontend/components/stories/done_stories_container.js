import { connect } from "react-redux";
import DoneStories from "./done_stories";

const mapStateToProps = (state, ownProps) => ({
  finished: Object.values(state.entities.stories.finished),
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

export default connect(mapStateToProps, mapDispatchToProps)(DoneStories);
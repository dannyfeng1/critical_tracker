import { connect } from "react-redux";
import Backlog from "./backlog";

const mapStateToProps = (state, ownProps) => ({
  backlog: state.entities.stories.backlog,
  currentUser: ownProps.currentUser,
  projectId: ownProps.projectId,
  presence: ownProps.presence
})

const mapDispatchToProps = dispatch => ({
  createStory: (story) => dispatch(createNewStory(story)),
  updateStory: (story) => dispatch(updateStory(story)),
  deleteStory: (storyId) => dispatch(deleteStory(storyId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Backlog);
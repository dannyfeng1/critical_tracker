import { connect } from "react-redux";
import { updateStoryOrder } from "../../actions/stories";
import Backlog from "./backlog";

const mapStateToProps = (state, ownProps) => ({
  backlog: state.entities.stories.backlog,
  currentUser: ownProps.currentUser,
  projectId: ownProps.projectId,
  presence: ownProps.presence,
  storyOrder: state.entities.stories.storyOrder
})

const mapDispatchToProps = dispatch => ({
  createStory: (story) => dispatch(createNewStory(story)),
  updateStory: (story) => dispatch(updateStory(story)),
  deleteStory: (storyId) => dispatch(deleteStory(storyId)),
  updateOrder: (iceboxOrder) => dispatch(updateStoryOrder(iceboxOrder))
})

export default connect(mapStateToProps, mapDispatchToProps)(Backlog);
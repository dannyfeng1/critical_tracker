import { connect } from "react-redux";
import { updateStoryOrder } from "../../actions/stories";
import Icebox from "./icebox";

const mapStateToProps = (state, ownProps) => ({
  icebox: state.entities.stories.icebox,
  currentUser: ownProps.currentUser,
  projectId: ownProps.projectId,
  presence: ownProps.presence,
  storyOrder: state.entities.stories.storyOrder 
})

const mapDispatchToProps = dispatch => ({
  createStory: (story) => dispatch(createNewStory(story)),
  updateStory: (story) => dispatch(updateStory(story)),
  deleteStory: (storyId) => dispatch(deleteStory(storyId)),
  assignStory: (storyId) => dispatch(assignStory(storyId)),
  updateOrder: (iceboxOrder) => dispatch(updateStoryOrder(iceboxOrder))
})

export default connect(mapStateToProps, mapDispatchToProps)(Icebox);
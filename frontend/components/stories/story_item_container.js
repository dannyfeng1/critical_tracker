import { connect } from "react-redux";
import { assignBacklogStory, assignIceboxStory, updateStory } from "../../actions/stories";
import StoryItem from "./story_item";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUser].username
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  iceboxAssign: () => dispatch(assignIceboxStory(ownProps.story.id)),
  backlogAssign: () => dispatch(assignBacklogStory(ownProps.story.id)),
  updateStory: (story) => dispatch(updateStory(story))
})

export default connect(mapStateToProps, mapDispatchToProps)(StoryItem);
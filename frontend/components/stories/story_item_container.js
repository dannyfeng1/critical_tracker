import { connect } from "react-redux";
import { assignBacklogStory, assignIceboxStory } from "../../actions/stories";
import StoryItem from "./story_item";

const mapStateToProps = (state, ownProps) => {
    return ({
      // assignedUser: state.entities.users[ownProps.story.assignedUserId]
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  iceboxAssign: () => dispatch(assignIceboxStory(ownProps.story.id)),
  backlogAssign: () => dispatch(assignBacklogStory(ownProps.story.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(StoryItem);
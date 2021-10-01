import { connect } from "react-redux";
import StoryItem from "./story_item";

const mapStateToProps = (state, ownProps) => {
  return {
    // storyOwner: state.entities.user[ownProps.story.storyOwnerId]
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, null)(StoryItem);
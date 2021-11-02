import { connect } from "react-redux";
import { fetchProjectStories, fetchStoryOrder } from "../../actions/stories";
import StoriesPage from "./stories_page";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  projectId: ownProps.project.id,
  stories: state.entities.stories
})

const mapDispatchToProps = dispatch => ({
  fetchStories: (projectId) => dispatch(fetchProjectStories(projectId)),
  fetchStoryOrder: (projectId) => dispatch(fetchStoryOrder(projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(StoriesPage);
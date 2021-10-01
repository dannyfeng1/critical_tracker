import { connect } from "react-redux";
import { fetchProjectStories } from "../../actions/stories";
import StoriesPage from "./stories_page";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  projectId: ownProps.project.id
})

const mapDispatchToProps = dispatch => ({
  fetchStories: (projectId) => dispatch(fetchProjectStories(projectId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(StoriesPage);
import { RECEIVE_ALL_STORIES, REMOVE_STORY, RECEIVE_MY_WORK_ASSIGNMENT, RECEIVE_BACKLOG_ASSIGNMENT, RECEIVE_ICEBOX_ASSIGNMENT, RECEIVE_STORY } from "../../../actions/stories";

const myWorkReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return action.stories.myWork ||= {};
    case RECEIVE_ICEBOX_ASSIGNMENT:
      newState[action.story.id] = action.story;
      return newState;   
    case RECEIVE_MY_WORK_ASSIGNMENT:
      newState[action.story.id] = action.story;
      return newState;
    case RECEIVE_BACKLOG_ASSIGNMENT:
      newState[action.story.id] = action.story;
      return newState;
    case RECEIVE_STORY:
      if (action.story.currentUser === action.story.assignedUser) {
        newState[action.story.id] = action.story;
        return newState;
      // } else if (action.story.currentUser !== action.story.assignedUser) {
      //   return newState;
      } else if (action.story.storyState === "Finished" || action.story.currentUser !== action.story.assignedUser) {
        delete newState[action.story.id];
        return newState;
      // } else if (action.story.storyState !== "Finished") {
      //   newState[action.story.id] = action.story;
        // return newState;
      }
    case REMOVE_STORY:
      delete newState[action.storyId]
      return newState
    default:
      return state;
  }
}

export default myWorkReducer;
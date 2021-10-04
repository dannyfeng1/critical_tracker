import { RECEIVE_ALL_STORIES, REMOVE_STORY, RECEIVE_BACKLOG_ASSIGNMENT, RECEIVE_ICEBOX_ASSIGNMENT, RECEIVE_STORY } from "../../../actions/stories";

const myWorkReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return action.stories.myWork ||= {};
    case RECEIVE_ICEBOX_ASSIGNMENT:
      newState[action.story.id] = action.story;
      return newState;
    case RECEIVE_BACKLOG_ASSIGNMENT:
      newState[action.story.id] = action.story;
      return newState;
    case RECEIVE_STORY:
      if (state[action.story.id] === undefined) {
        newState[action.story.id] = action.story;
      } else if (action.story.assignedUser !== state[action.story.id].assignedUser) {
        delete newState[action.story.id];
      }
      return newState;
    case REMOVE_STORY:
      delete newState[action.storyId]
      return newState
    default:
      return state;
  }
}

export default myWorkReducer;
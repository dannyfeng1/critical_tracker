import { RECEIVE_ALL_STORIES, REMOVE_STORY, RECEIVE_ASSIGNMENT } from "../../../actions/stories";

const myWorkReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return action.stories.myWork ||= {};
    case RECEIVE_ASSIGNMENT:
      newState[action.storyId] = action.story;
      return newState;
    case REMOVE_STORY:
      delete newState[action.storyId]
      return newState
    default:
      return state;
  }
}

export default myWorkReducer;
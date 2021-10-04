import { RECEIVE_ALL_STORIES, RECEIVE_STORY, REMOVE_STORY, RECEIVE_ICEBOX_ASSIGNMENT } from "../../../actions/stories";

const iceboxReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return action.stories.icebox ||= {}
    case RECEIVE_STORY:
      if (action.story.priority === false) {
        newState[action.story.id] = action.story;
        return newState;
      } else {
        return state;
      }
    case REMOVE_STORY:
      delete newState[action.storyId]
      return newState
    case RECEIVE_ICEBOX_ASSIGNMENT:
      newState[action.story.id] = action.story;
      return newState;
    default:
      return state;
  }
}

export default iceboxReducer;
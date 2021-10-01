import { RECEIVE_ALL_STORIES, RECEIVE_STORY, REMOVE_STORY } from "../../../actions/stories";

const backlogReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return action.stories.backlog
    case RECEIVE_STORY:
      if (action.story.story_state === "Finished" || action.story.priority === false) {
        return state;
      } else {
        newState[action.story.id] = action.story;
        return newState;
      }
    case REMOVE_STORY:
      delete newState[action.storyId]
      return newState
    default:
      return state;
  }
}

export default backlogReducer;
import { RECEIVE_ALL_STORIES, RECEIVE_STORY, REMOVE_STORY } from "../../../actions/stories";

const finishedStoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return action.stories.finished ||= {};
    case RECEIVE_STORY:
      if (action.story.story_state === "Finished") {
        newState[action.story.id] = action.story;
        return newState;
      } else {
        return state;
      }
    case REMOVE_STORY:
      delete newState[action.storyId]
      return newState
    default:
      return state;
  }
}

export default finishedStoriesReducer;
import { RECEIVE_ALL_STORIES, RECEIVE_BACKLOG_ASSIGNMENT, RECEIVE_STORY, REMOVE_STORY } from "../../../actions/stories";

const backlogReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return action.stories.backlog ||= {}
    case RECEIVE_STORY:
      if (action.story.storyState === "Finished" || action.story.priority === false) {
        delete newState[action.story.id]
        return newState;
      } else {
        newState[action.story.id] = action.story;
        return newState;
      }
    case REMOVE_STORY:
      delete newState[action.storyId];
      return newState;
    case RECEIVE_BACKLOG_ASSIGNMENT:
      newState[action.story.id] = action.story;
      return newState;
    default:
      return state;
  }
}

export default backlogReducer;
import { RECEIVE_STORY_ERRORS, CLEAR_STORY_ERRORS } from "../../../actions/stories";

const storyErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STORY_ERRORS:
      return action.errors.responseJSON;
    case CLEAR_STORY_ERRORS:
      return [];
    default:
      return state;
  }
}

export default storyErrorsReducer
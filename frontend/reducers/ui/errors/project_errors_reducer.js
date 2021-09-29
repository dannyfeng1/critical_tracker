import { RECEIVE_PROJECT_ERRORS, CLEAR_PROJECT_ERRORS, RECEIVE_PROJECT } from "../../../actions/projects";

const projectErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_PROJECT:
      return [];
    case RECEIVE_PROJECT_ERRORS:
      return action.errors.responseJSON;
    case CLEAR_PROJECT_ERRORS:
      return [];  
    default:
      return state;
  }
}

export default projectErrorsReducer;
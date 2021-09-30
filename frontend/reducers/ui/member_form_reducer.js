import { RECEIVE_MEMBER, RECEIVE_MEMBER_ERRORS, CLEAR_MEMBER_MESSAGES } from "../../actions/projects";

const memberFormReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MEMBER:
      return [`${action.member.username} has been added to project!`]
    case RECEIVE_MEMBER_ERRORS:
      return action.errors.responseJSON;
    case CLEAR_MEMBER_MESSAGES:
      return [];
    default:
      return state;
  }
}

export default memberFormReducer;
import { RECEIVE_CURRENT_USER } from "../../actions/session";
import { RECEIVE_MEMBERS, RECEIVE_MEMBER } from "../../actions/projects";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState
    case RECEIVE_MEMBERS:
      return action.members;
    case RECEIVE_MEMBER:
      newState[action.member.id] = action.member
      return newState
    default:
      return state;
  }
}

export default usersReducer;
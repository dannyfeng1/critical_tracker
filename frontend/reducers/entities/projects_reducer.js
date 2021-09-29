import { RECEIVE_PROJECT, RECEIVE_USER_PROJECTS, REMOVE_PROJECT } from "../../actions/projects";

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_USER_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      newState[action.project.id] = action.project;
      return newState;
    case REMOVE_PROJECT:
      delete newState[action.projectId]
    default:
      return state;
  }
}

export default projectsReducer;
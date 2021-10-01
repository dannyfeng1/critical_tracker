import { combineReducers } from "redux";
import projectsReducer from "./projects_reducer";
import storiesReducer from "./stories/stories_reducer";
import usersReducer from "./users_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  stories: storiesReducer
})

export default entitiesReducer;
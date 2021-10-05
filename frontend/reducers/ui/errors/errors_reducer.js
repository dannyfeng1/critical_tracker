import { combineReducers } from "redux"
import projectErrorsReducer from "./project_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer"
import storyErrorsReducer from "./story_errors_reducer"

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  projectErrors: projectErrorsReducer,
  storyErrors: storyErrorsReducer
})

export default errorsReducer;
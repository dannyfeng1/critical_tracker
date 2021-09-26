import { combineReducers } from "redux";
import sessionReducer from "./session/session_reducer";
import errorsReducer from ".errors/errors_reducer";
import entitiesReducer from "./entities/entities_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  // ui: uiReducer
})

export default rootReducer
import { combineReducers } from "redux";
import sessionReducer from "./session/session_reducer";
import entitiesReducer from "./entities/entities_reducer";
import uiReducer from "./ui/ui_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  ui: uiReducer
})

export default rootReducer
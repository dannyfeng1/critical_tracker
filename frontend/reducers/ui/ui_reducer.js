import { combineReducers } from "redux"
import errorsReducer from "./errors/errors_reducer"
import modalsReducer from "./modal_reducer";

const uiReducer = combineReducers({
  errors: errorsReducer,
  modals: modalsReducer
})

export default uiReducer;
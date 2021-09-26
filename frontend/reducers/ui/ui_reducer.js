import { combineReducers } from "redux"
import errorsReducer from "./errors/errors_reducer"

const uiReducer = combineReducers({
  errors: errorsReducer
})

export default uiReducer;
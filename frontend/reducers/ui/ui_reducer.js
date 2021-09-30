import { combineReducers } from "redux"
import errorsReducer from "./errors/errors_reducer"
import modalsReducer from "./modal_reducer";
import memberFormReducer from "./member_form_reducer";

const uiReducer = combineReducers({
  errors: errorsReducer,
  modals: modalsReducer,
  memberFormMessages: memberFormReducer
})

export default uiReducer;
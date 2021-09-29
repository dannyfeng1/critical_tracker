import { OPEN_MODAL, CLOSE_MODAL } from "../../actions/modal";

const modalsReducer = (state = "", action) => {
  Object.freeze(state);

  switch (action.type) {
    case OPEN_MODAL:
      return action.string;
    case CLOSE_MODAL:
      return "";
    default:
      return state;
  }
}

export default modalsReducer;
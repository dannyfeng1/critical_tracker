import { RECEIVE_STORY_ORDER } from "../../../actions/stories"

const storyOrderReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STORY_ORDER:
      return action.order
    default:
      return state;
  }
}


export default storyOrderReducer
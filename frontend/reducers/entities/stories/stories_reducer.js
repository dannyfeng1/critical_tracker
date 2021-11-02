import { combineReducers } from "redux";
import backlogReducer from "./backlog_reducer";
import finishedStoriesReducer from "./finished_stories_reducer";
import iceboxReducer from "./icebox_reducer";
import myWorkReducer from "./my_work_reducer";
import storyOrderReducer from "./story_order_reducer"

const storiesReducer = combineReducers({
  backlog: backlogReducer,
  finished: finishedStoriesReducer,
  icebox: iceboxReducer,
  myWork: myWorkReducer,
  storyOrder: storyOrderReducer
})

export default storiesReducer;
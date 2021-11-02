import * as StoriesAPI from "../util/story_api_util"

export const RECEIVE_ALL_STORIES = "RECEIVE_ALL_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const REMOVE_STORY = "REMOVE_STORY";
export const RECEIVE_STORY_ERRORS = "RECEIVE_STORY_ERRORS";
export const CLEAR_STORY_ERRORS = "CLEAR_STORY_ERRORS";
export const RECEIVE_BACKLOG_ASSIGNMENT = "RECEIVE_BACKLOG_ASSIGNMENT"
export const RECEIVE_ICEBOX_ASSIGNMENT = "RECEIVE_ICEBOX_ASSIGNMENT"
export const RECEIVE_MY_WORK_ASSIGNMENT = "RECEIVE_MY_WORK_ASSIGNMENT";
export const RECEIVE_STORY_ORDER = "RECEIVE_STORY_ORDER";

const receivedStories = stories => ({
  type: RECEIVE_ALL_STORIES,
  stories
})

const receivedStory = story => ({
  type: RECEIVE_STORY,
  story
})

const removeStory = storyId => ({
  type: REMOVE_STORY,
  storyId
})

const receiveStoryErrors = errors => ({
  type: RECEIVE_STORY_ERRORS,
  errors
})

const receivedBacklogAssignment = story => ({
  type: RECEIVE_BACKLOG_ASSIGNMENT,
  story
})

const receivedIceboxAssignment = story => ({
  type: RECEIVE_ICEBOX_ASSIGNMENT,
  story
})

const receivedMyWorkAssignment = story => ({
  type: RECEIVE_MY_WORK_ASSIGNMENT,
  story
})

export const clearStoryErrors = () => ({
  type: CLEAR_STORY_ERRORS
})

export const fetchProjectStories = (projectId) => dispatch => (
  StoriesAPI.fetchProjectStories(projectId)
    .then(stories => dispatch(receivedStories(stories)))
)

export const createNewStory = story => dispatch => (
  StoriesAPI.createStory(story)
    .then(story => dispatch(receivedStory(story)),
    errors => dispatch(receiveStoryErrors(errors))
    )
)

export const updateStory = story => dispatch => (
  StoriesAPI.updateStory(story)
    .then(story => dispatch(receivedStory(story)),
    errors => dispatch(receiveStoryErrors(errors))
    )
)

export const deleteStory = storyId => dispatch => (
  StoriesAPI.deleteStory(storyId)
    .then(() => dispatch(removeStory(storyId)),
    errors => dispatch(receiveStoryErrors(errors))
    )
)

export const assignBacklogStory = storyId => dispatch => (
  StoriesAPI.assignStory(storyId)
    .then(story => dispatch(receivedBacklogAssignment(story)))
)

export const assignIceboxStory = storyId => dispatch => (
  StoriesAPI.assignStory(storyId)
    .then(story => dispatch(receivedIceboxAssignment(story)))
)

export const assignToSelf = storyId => dispatch => (
  StoriesAPI.assignStory(storyId)
    .then(story => dispatch(receivedMyWorkAssignment(story)))
)

const receivedStoryOrder = order => ({
  type: RECEIVE_STORY_ORDER,
  order
})

export const fetchStoryOrder = projectId => dispatch => (
  StoriesAPI.fetchStoryOrder(projectId)
    .then(order => dispatch(receivedStoryOrder(order)))
)

export const updateStoryOrder = storyOrder => dispatch => (
  StoriesAPI.updateStoryOrder(storyOrder)
    .then(order => dispatch(receivedStoryOrder(order)))
)
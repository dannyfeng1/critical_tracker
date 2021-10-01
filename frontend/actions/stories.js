import * as StoriesAPI from "../util/story_api_util"

export const RECEIVE_ALL_STORIES = "RECEIVE_ALL_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const REMOVE_STORY = "REMOVE_STORY";
export const RECEIVE_STORY_ERRORS = "RECEIVE_STORY_ERRORS";
export const CLEAR_STORY_ERRORS = "CLEAR_STORY_ERRORS";
export const RECEIVE_ASSIGNMENT = "RECEIVE_ASSIGNMENT"

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

const receivedAssignment = story => ({
  type: RECEIVE_ASSIGNMENT,
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
    .then(story => dispatch(removeStory(storyId)),
    errors => dispatch(receiveStoryErrors(errors))
    )
)

export const assignStory = storyId => dispatch => (
  StoriesAPI.assignStory(storyId)
    .then(story => dispatch(receivedAssignment(story)))
)
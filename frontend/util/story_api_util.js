export const fetchProjectStories = projectId => (
  $.ajax({
    method: "GET",
    url: "/api/stories",
    data: { projectId }
  })
)

export const createStory = story => (
  $.ajax({
    method: "POST",
    url: "/api/stories",
    data: { story }
  })
)

export const updateStory = story => (
  $.ajax({
    method: "PATCH",
    url: `/api/stories/${story.id}`,
    data: { story }
  })
)

export const deleteStory = storyId => (
  $.ajax({
    method: "DELETE",
    url: `/api/stories/${storyId}`
  })
)

export const assignStory = storyId => (
  $.ajax({
    method: "POST",
    url: "/api/assigned_stories",
    data: { storyId }
  })
)
export const getUserProjects = () => (
  $.ajax({
    method: "GET",
    url: "/api/projects"
  })
)

export const createNewProject = (project) => (
  $.ajax({
    method: "POST",
    url: "/api/projects",
    data: { project }
  })
)

export const getProject = projectId => (
  $.ajax({
    method: "GET",
    url: `/api/projects/${projectId}`,
  })
)

export const updateProject = project => (
  $.ajax({
    method: "PATCH",
    url: `/api/projects/${project.id}`,
    data: { project }
  })
)

export const deleteProject = projectId => (
  $.ajax({
    method: "DELETE",
    url: `/api/projects/${projectId}`
  })
)
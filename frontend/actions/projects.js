import * as ProjectsAPI from '../util/project_api_util';

export const RECEIVE_USER_PROJECTS = "RECEIVE_USER_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";
export const CLEAR_PROJECT_ERRORS = "CLEAR_PROJECT_ERRORS";

const receivedUserProjects = (projects) => ({
  type: RECEIVE_USER_PROJECTS,
  projects
})

const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
})

const removeProject = projectId => ({
  type: REMOVE_PROJECT,
  projectId
})

const receiveErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_PROJECT_ERRORS,
})

export const getUserProjects = () => dispatch => (
  ProjectsAPI.getUserProjects()
    .then(projects => dispatch(receivedUserProjects(projects)))
)

export const createNewProject = project => dispatch => (
  ProjectsAPI.createNewProject(project)
    .then(project => dispatch(receiveProject(project)),
    errors => dispatch(receiveErrors(errors)))
)

export const getProject = projectId => dispatch => (
  ProjectsAPI.getProject(projectId)
    .then(project => dispatch(receiveProject(project)),
    errors => dispatch(receiveErrors(errors)))
)

export const updateProject = project => dispatch => (
  ProjectsAPI.updateProject(project)
    .then(project => dispatch(receiveProject(project)), 
    errors => dispatch(receiveErrors(errors)))
)

export const deleteProject = projectId => dispatch => (
  ProjectsAPI.deleteProject(projectId)
    .then(() => dispatch(removeProject(projectId)),
    errors => dispatch(receiveErrors(errors)))
)
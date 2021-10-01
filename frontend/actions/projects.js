import * as ProjectsAPI from '../util/project_api_util';

export const RECEIVE_USER_PROJECTS = "RECEIVE_USER_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";
export const CLEAR_PROJECT_ERRORS = "CLEAR_PROJECT_ERRORS";
export const RECEIVE_MEMBERS = "RECEIVE_MEMBERS"
export const RECEIVE_MEMBER = "RECEIVE_MEMBER";
export const RECEIVE_MEMBER_ERRORS = "RECEIVE_MEMBER_ERRORS";
export const CLEAR_MEMBER_MESSAGES = "CLEAR_MEMBER_MESSAGES"

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

const receivedMembers = members => ({
  type: RECEIVE_MEMBERS,
  members
})

const receivedMember = member => ({
  type: RECEIVE_MEMBER,
  member
})

export const clearProjectErrors = () => ({
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

export const fetchMembers = projectId => dispatch => (
  ProjectsAPI.fetchProjectMembers(projectId)
    .then((members) => dispatch(receivedMembers(members)))
)

const addMemberErrors = errors => ({
  type: RECEIVE_MEMBER_ERRORS,
  errors
})

export const addProjectMember = form => dispatch => (
  ProjectsAPI.addProjectMember(form)
    .then((member) => dispatch(receivedMember(member)),
    errors => dispatch(addMemberErrors(errors)))
)

export const clearMemberMessages = () => ({
  type: CLEAR_MEMBER_MESSAGES
})
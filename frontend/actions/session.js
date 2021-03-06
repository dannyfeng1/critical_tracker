import * as UsersAPI from "../util/user_api_util";

export const CREATE_USER = "CREATE_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
})

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const signup = user => dispatch => {
  return UsersAPI.signup(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      error => dispatch(receiveErrors(error))
    )
}

export const login = user => dispatch => {
  return UsersAPI.login(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      error => dispatch(receiveErrors(error))
    )
}

export const logout = () => dispatch => {
  return UsersAPI.logout()
    .then(
      () => dispatch(logoutCurrentUser()),
      error => dispatch(receiveErrors(error))
    )
}

export const getCurrentUser = () => dispatch => {
  return UsersAPI.getCurrentUser()
    .then((user) => dispatch(receiveCurrentUser(user)))
}
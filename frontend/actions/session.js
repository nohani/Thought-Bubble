import { postUser, deleteSession, postSession, fetchUsers } from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const RECEIVE_USERS = 'RECEIVE_USERS'

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
})

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
})

export const createNewUser = (formUser) => (dispatch) => postUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)), (errors) => dispatch(receiveErrors(errors.responseJSON)))

export const login = formUser => dispatch => postSession(formUser)
  .then(user => dispatch(receiveCurrentUser(user)), (errors) => dispatch(receiveErrors(errors.responseJSON)))

export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()), (errors) => dispatch(receiveErrors(errors.responseJSON)))

export const fetchAllUsers = () => (dispatch) => fetchUsers()
  .then((users) => dispatch(receiveUsers(users), (errors) => dispatch(receiveErrors(errors.responseJSON))))


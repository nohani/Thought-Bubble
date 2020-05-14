import * as FollowAPIUtils from "../utils/follow_utils"
import { receiveUser } from "./session"


export const RECEIVE_UNFOLLOWED_USERS = "RECEIVE_UNFOLLOWED_USERS";

export const receiveUnfollowedUsers = (users) => ({
  type: RECEIVE_UNFOLLOWED_USERS,
  users
})


export const createFollow = (userId) => (dispatch) => FollowAPIUtils.createFollow(userId)
  .then((user) => dispatch(receiveUser(user)))

export const deleteFollow = (userId) => (dispatch) => FollowAPIUtils.deleteFollow(userId)
  .then((user) => dispatch(receiveUser(user)))

export const fetchUnfollowedUsers = () => (dispatch) => FollowAPIUtils.fetchUnfollowedUsers()
  .then((users) => dispatch(receiveUnfollowedUsers(users)))


import * as FollowAPIUtils from "../utils/follow_utils"
import { receiveUser } from "./session"

<<<<<<< HEAD

export const RECEIVE_UNFOLLOWED_USERS = "RECEIVE_UNFOLLOWED_USERS";

export const receiveUnfollowedUsers = (users) => ({
  type: RECEIVE_UNFOLLOWED_USERS,
  users
})


=======
>>>>>>> f55d524dd73b1f5fc03b2d639537fd3698a66b79
export const createFollow = (userId) => (dispatch) => FollowAPIUtils.createFollow(userId)
  .then((user) => dispatch(receiveUser(user)))

export const deleteFollow = (userId) => (dispatch) => FollowAPIUtils.deleteFollow(userId)
  .then((user) => dispatch(receiveUser(user)))

<<<<<<< HEAD
export const fetchUnfollowedUsers = () => (dispatch) => FollowAPIUtils.fetchUnfollowedUsers()
  .then((users) => dispatch(receiveUnfollowedUsers(users)))

=======
>>>>>>> f55d524dd73b1f5fc03b2d639537fd3698a66b79

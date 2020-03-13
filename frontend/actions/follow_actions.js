import * as FollowAPIUtils from "../utils/follow_utils"
import { receiveUser } from "./session"

export const createFollow = (userId) => (dispatch) => FollowAPIUtils.createFollow(userId)
  .then((user) => dispatch(receiveUser(user)))

export const deleteFollow = (userId) => (dispatch) => FollowAPIUtils.deleteFollow(userId)
  .then((user) => dispatch(receiveUser(user)))


import * as LikeAPIUtils from "../utils/like_utils"
import { receivePost } from "./post_actions"


export const createLike = (postId) => (dispatch) => LikeAPIUtils.createLike(postId)
  .then((post) => dispatch(receivePost(post)))

export const deleteLike = (postId) => (dispatch) => LikeAPIUtils.deleteLike(postId)
  .then((post) => dispatch(receivePost(post)))
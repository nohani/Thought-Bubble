import * as PostAPIUtils from '../utils/post_utils';

export const RECEIVE_POSTS_AND_USERS = "RECEIVE_POSTS_AND_USERS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const CLEAR_POST_ERRORS = 'CLEAR_SESSION_ERRORS';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

export const receivePosts = (payload) => ({
  type: RECEIVE_POSTS_AND_USERS,
  payload
})

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
})

const removePost = (postId) => ({
  type: REMOVE_POST,
  postId
})

const receiveErrors = (errors) => ({
  type: RECEIVE_POST_ERRORS,
  errors
})

export const clearPostErrors = () => ({
  type: CLEAR_POST_ERRORS
})

//must come back to do errors 

export const fetchPosts = () => (dispatch) => PostAPIUtils.fetchPosts()
  .then((response) => dispatch(receivePosts(response)), (errors) => dispatch(receiveErrors(errors.responseJSON)));

export const fetchLikedPosts = () => (dispatch) => PostAPIUtils.fetchLikedPosts()
  .then((response) => dispatch(receivePosts(response)), (errors) => dispatch(receiveErrors(errors.responseJSON)));  

export const fetchPost = (postId) => (dispatch) => PostAPIUtils.fetchPost(postId)
  .then((post) => dispatch(receivePost(post)), (errors) => dispatch(receiveErrors(errors.responseJSON)));

export const editPost = (post) => (dispatch) => PostAPIUtils.editPost(post)
  .then((post) => dispatch(receivePost(post)), (errors) => dispatch(receiveErrors(errors.responseJSON)));

export const editMediaPost = (post, postId) => (dispatch) => PostAPIUtils.editMediaPost(post, postId)
  .then((post) => dispatch(receivePost(post)), (errors) => dispatch(receiveErrors(errors.responseJSON)));

export const createPost = (post) => (dispatch) => PostAPIUtils.createPost(post)
  .then((post) => dispatch(receivePost(post)), (errors) => dispatch(receiveErrors(errors.responseJSON)));

export const createMediaPost = (post) => (dispatch) => PostAPIUtils.createMediaPost(post)
  .then((post) => dispatch(receivePost(post)), (errors) => dispatch(receiveErrors(errors.responseJSON)));

export const deletePost = (postId) => (dispatch) => PostAPIUtils.deletePost(postId)
  .then(() => dispatch(removePost(postId)), (errors) => dispatch(receiveErrors(errors.responseJSON)));

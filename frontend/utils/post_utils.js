
export const fetchPosts = () => {
  return $.ajax({
    url: "api/posts",
    method: "GET"
  })
}

export const fetchPost = (postId) => {
  return $.ajax({
    url: `api/posts/${postId}`
  })
}

export const editPost = (post) => {
  return $.ajax({
    url: `api/posts/${post.id}`,
    method: "GET",
    post
  })
}

export const deletePost = (postId) => {
  return $.ajax({
    url: `api/posts/${postId}`,
    method: "DELETE"
  })
}

export const createPost = (post) => {
  return $.ajax({
    url: `api/posts/`,
    method: "POST",
    post
  })
}

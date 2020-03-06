
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
    data: { post }
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
    data: { post }
  })
}

export const createMediaPost = (formData) => {
  return $.ajax({
    url: `api/posts/`,
    method: "POST",
    data: formData,
    contentType: false,
    processData: false
  })
}

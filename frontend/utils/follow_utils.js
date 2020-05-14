export const createFollow = (userId) => {
  return $.ajax({
    url: `api/users/${userId}/follows`,
    method: "POST"
  })
}

export const deleteFollow = (userId) => {
  return $.ajax({
    url: `api/users/${userId}/follows`,
    method: "DELETE"
  })
}

<<<<<<< HEAD
export const fetchUnfollowedUsers = () => {
  return $.ajax({
    url: 'api/users/follows',
    method: "GET"
  })
}

=======
>>>>>>> f55d524dd73b1f5fc03b2d639537fd3698a66b79

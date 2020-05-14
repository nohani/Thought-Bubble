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

export const fetchUnfollowedUsers = () => {
  return $.ajax({
    url: 'api/users/follows',
    method: "GET"
  })
}


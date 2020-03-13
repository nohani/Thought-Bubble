json.extract! user, :id, :username

if current_user.id == user.id
  json.extract! user, :liked_post_ids, :authored_post_ids, :followed_user_ids, :followed_by_user_ids
end
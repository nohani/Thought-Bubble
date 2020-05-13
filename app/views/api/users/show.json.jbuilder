# json.extract! current_user, :id, :username, :liked_post_ids, :authored_post_ids, :followed_user_ids, :followed_by_user_ids

json.partial! 'api/users/user', user: current_user
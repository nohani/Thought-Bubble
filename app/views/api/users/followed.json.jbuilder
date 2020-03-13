
  json.set! current_user.id do
    json.partial! 'api/users/user', user: current_user
  end

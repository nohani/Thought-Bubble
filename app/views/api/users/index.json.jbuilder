@users.each do |user|
  json.users do
    json.set! user.id do
      json.partial! 'api/users/user', user: current_user
    end
  end
end



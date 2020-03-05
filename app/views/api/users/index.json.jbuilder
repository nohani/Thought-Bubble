@users.each do |user|
  json.users do
    json.set! user.id do
      json.extract! user, :id, :username
    end
  end
end



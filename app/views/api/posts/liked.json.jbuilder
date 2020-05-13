# Normalizing State for likes
json.posts do
  @liked_posts.each do |post|
      json.set! post.id do
        json.partial! "api/posts/post", post: post
    end
  end
end

json.users do
    json.set! current_user.id do
         json.partial! 'api/users/user', user: current_user
    end
end
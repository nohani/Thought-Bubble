# Normalizing State
json.posts do
  @posts.each do |post|
      json.set! post.id do
        json.partial! "api/posts/post", post: post
    end
  end
end

json.users do
  @posts.map(&:author).each do |user|
    json.set! user.id do
      json.extract! user, :id, :username, :authored_post_ids, :followed_user_ids, :followed_by_user_ids
    end
  end
end
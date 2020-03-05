@posts.each do |post|
  json.posts do
    json.set! post.id do
      json.extract! post, :id, :post_type, :content
      json.image_url <%= url_for(post.photo) =>
    end
  end
end
json.extract! post, :id, :author_id, :post_type, :title, :content, :link, :quote, :source
  json.num_likes post.likes.count
  json.liked_by_user post.likers.include?(current_user)
  if post.photo.attached?
    json.image_url url_for(post.photo)
  end
  if post.video.attached?
    json.video_url url_for(post.video)
  end
  if post.audio.attached?
    json.audio_url url_for(post.audio)
  end
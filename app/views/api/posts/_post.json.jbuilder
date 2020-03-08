json.extract! post, :id, :post_type, :title, :content, :link, :quote, :source
  if post.photo.attached?
    json.image_url url_for(post.photo)
  end
  if post.video.attached?
    json.video_url url_for(post.video)
  end
  if post.audio.attached?
    json.audio_url url_for(post.audio)
  end
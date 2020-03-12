class Api::LikesController < ApplicationController

  def index 
    @liked_posts = current_user.liked_posts

    render 'api/posts/liked'
  end

  def create
    @like = Like.new(post_id: params[:post_id], liker_id: current_user.id)
    @post = Post.find_by(id: params[:post_id])

    if @like.save
      render 'api/posts/show'
    else
      render json: like.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:post_id])
    @like = @post.likes.find_by(liker_id: current_user.id)

    if @like.destroy
      render 'api/posts/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

end
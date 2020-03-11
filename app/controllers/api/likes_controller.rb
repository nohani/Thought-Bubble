class Api::LikesController < ApplicationController

  def create
    @like = Like.new(post_id: params[:post_id], liker_id: current_user.id)

    if @like.create
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:post_id])
    @like = @post.likes.find_by(liker_id: current_user.id)

    if @like.destroy
      render :index
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

end
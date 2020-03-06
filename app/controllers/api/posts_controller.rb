class Api::PostsController < ApplicationController

    def index
      @posts = current_user.authored_posts
    end

    def show
      @post = current_user.authored_posts.find_by(id: params[:id])

      if @post
        render :show
      else
        render json: ['Post does not exist.'], status: 422
      end

    end

    def update
      @post = current_user.authored_posts.find_by(id: params[:id])

      if @post.update(post_params)
        render :show
      else
        render json: @post.errors.full_messages
      end
    end

    def destroy
      @post = current_user.authored_posts.find_by(id: params[:id])

      if @post 
        @post.destroy
      else
        render json: ["This post does not exist."], status: 422
      end
    end

    def create
      @post = Post.new(post_params)
      @post.author_id = current_user.id

      if @post.save
        render :show
      else
        render json: @post.errors.full_messages
      end
    end

    private

    def post_params
      params.require(:post).permit(:title, :content, :quote, :link, :source, :post_type, :photo, :video, :audio)
    end
end
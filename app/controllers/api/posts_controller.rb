class Api::PostsController < ApplicationController

    def index
      @posts = current_user.authored_posts
    end

    def edit
      @post = current_user.authored_posts.find_by(id: params[:id])

      if @post.update(post_params)
        render :index
      else
        render json: @post.errors.full_messages
      end
    end

    def destroy
      @post = current_user.authored_posts.find_by(id: params[:id])

      if @post 
        @post.destroy
      else
        render json: ["This post does not exist."]
      end
    end

    def create
      @post = Post.new(post_params)
      @post.author_id = current_user.id

      if @post.save
        render :index
      else
        render json: @post.errors.full_messages
      end
    end

    private

    def post_params
      params.require(:post).permit(:content, :post_type)
    end
end
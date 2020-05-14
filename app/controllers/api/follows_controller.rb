class Api::FollowsController < ApplicationController

  # def index
  #   @followers = current_user.followed_by_users
  #   @followees = current_user.followed_by_users

  #   render 'api/users/follows'
  # end

  def index
    @followed_users = current_user.followed_user_ids
    @users = User.all
    @not_followed = []

    @users.each do |user|
      if(!@followed_users.include?(user.id))
        @not_followed.push(user)
      end
    end

    render 'api/users/not_followed'
  end

  def create
    @follow = Follow.new(follower_id: current_user.id, followee_id: params[:user_id])

    if @follow.save
      render 'api/users/followed'
    else
      render json: @follow.errors.full_messages
    end
  end

  def destroy
    @follow = current_user.following.find_by(followee_id: params[:user_id])

    if @follow
      @follow.destroy
      render 'api/users/followed'
    else
      render json: @follow.errors.full_messages
    end
  end

end
class Api::SessionsController < ApplicationController

def create
  @user = User.find_by_credentials(
    params[:user][:email],
    params[:user][:password]
  )

  if @user
    login(@user)
    render 'api/users/show'
  else
    render json: ["Invalid username and password combination"], status: 404
  end

end

def destroy
  if current_user
    logout
    render json: {}
  else
    render json: ["Could not log out"], status: 404
  end
end

end
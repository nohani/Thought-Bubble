class ApplicationController < ActionController::Base

  #CELLL
  helper_method :current_user

  def current_user
    return nil unless session[:session_token]
    @user ||= User.find_by(session_token: session[:session_token])
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
  end
end

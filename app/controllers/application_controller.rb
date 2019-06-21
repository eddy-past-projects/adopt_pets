class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }



  before_action :authorized
  helper_method :current_user

  def current_user
    User.find_by({id: session[:user_id]})
  end

  def logged_in?
    !!current_user
  end

  def authorized
    redirect_to login_path unless logged_in?
  end
end

class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:new, :create]

  def new
    render :new
  end

  def create
    # // you need to receive user name & password from js
    # // through params
    @user = User.find_by(name: params[:name])
    # byebug
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      # # // serve up json
      # respond_to do |f|
      #   f.html {render :show}
        # f.json {render json: @user.pets}
      render json: @user.pets
      # redirect_to user_path(@user)
    # end
    else
      flash[:message] = 'Invalid name or password'
      redirect_to login_path
    end

  end

  def delete
    session.delete(:user_id)
    redirect_to '/'
  end


end

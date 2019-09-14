class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:new, :create]
  helper_method :current_user

  def new
    render :new
  end

  # def create
  #   # // you need to receive user name & password from js
  #   # // through params
  #   @user = User.find_by(name: params[:name])
  #   if @user && @user.authenticate(params[:password])
  #     session[:user_id] = @user.id
  #     # # // serve up json
  #     # render json: @user
  #     render json: @user.pets
  #     # redirect_to user_path(@user)
  #   else
  #     flash[:message] = 'Invalid name or password'
  #     redirect_to login_path
  #   end
  # end




  def create
    # // you need to receive user name & password from js
    # // through params
    @user = User.find_by(name: params[:name])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id

      respond_to do |f|
        f.html {redirect_to user_path(@user)}
        # f.html {render :show}

        f.json {render json: @user.pets}
      # # // serve up json
      # render json: @user
      # render json: @user.pets
    end
      # redirect_to user_path(@user)
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

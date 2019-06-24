class UsersController < ApplicationController
  skip_before_action :authorized, only: [:new, :create]
  before_action :set_user, only: [:show, :destroy]


  def new
    @user = User.new
    respond_to do |f|
      f.html {render :new}
      f.json {render json: @user}
    end
  end

  def index
    @users = User.all
    respond_to do |f|
      f.html {render :index}
      f.json {render json: @users}
    end
  end

  def show
    @pet = @user.pets
    # @pet = @user.pets.build
    respond_to do |f|
      f.html {render :show}
      f.json {render json: @user}
    end
    # render json: @user
  end

  # def pet_attribute
  #   Self.object.pet.attribute
  # end

  def destroy
    @user.destroy
  end

  def create
    @user = User.new(user_params)
  
    if(@user.save)
      session[:user_id] = @user.id
      render json: @user

    else
      flash[:notice] = @user.errors.full_messages.join
      redirect_to new_user_path
    end
  end


  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :password)
  end


end

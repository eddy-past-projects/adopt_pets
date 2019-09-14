class PetsController < ApplicationController
  skip_before_action :authorized, only: [:new, :index, :show, :create]
  before_action :set_pet, only: [:show, :pet_hungry, :edit, :update, :destroy]
  helper_method :current_user


  def new
    @pet = Pet.new
    @users = User.all
    respond_to do |f|
      f.html {render :new}
      f.json {render json: @pet}
    end
  end

  def index
    @pets = Pet.all
    respond_to do |f|
      f.html {render :index}
      f.json {render json: @pets}
    end
  end

  def show
    @toy = @pet.toys.build
    respond_to do |f|
      f.html {render :show}
      f.json {render json: @pet}
    end
  end

  def pet_hungry
      @pet.toggle(:hungry)
      @pet.save
      respond_to do |f|
      f.html {redirect_to pet_path(@pet)}
      f.json {render json: @pet}
    end
  end


  def create
    @pet = Pet.create(pet_params)
    @users = User.all
    if @pet.valid?
      respond_to do |f|
        f.html {redirect_to pet_path(@pet)}
        f.json {render json: @pet}
      end
    else
      flash[:notice] = @pet.errors.full_messages.join
      render :new
    end
  end

  def edit
    @users = User.all
    respond_to do |f|
      f.html {render :edit}
      f.json {render json: @pet}
    end
  end

  def update
    @pet.update(pet_params)
    respond_to do |f|
      f.html {redirect_to pet_path(@pet)}
      f.json {render json: @pet}
    end
  end

  def destroy
    @pet.destroy
    respond_to do |f|
      f.html {redirect_to user_path(@pet.user)}
      f.json {render json: @pet}
    end
  end




  private

  def set_pet
    @pet = Pet.find(params[:id])
  end

  def pet_params
    params.require(:pet).permit(:name, :kind, :age, :user_id, :color, :hair, :image)
  end





end #end of class

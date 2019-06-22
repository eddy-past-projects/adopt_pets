class PetsController < ApplicationController
  skip_before_action :authorized, only: [:new, :index, :create]



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
    @pet = Pet.find(params[:id])
    # @toy = @pet.toys.build
    # set_pet
    respond_to do |f|
      f.html {render :show}
      f.json {render json: @pet}
    end
  end

  def pet_hungry
    @pet = Pet.find(params[:id])
    # set_pet
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
    @pet = Pet.find(params[:id])
    # set_pet
    @users = User.all
    respond_to do |f|
      f.html {render :edit}
      f.json {render json: @pet}
    end
  end

  def update
    @pet = Pet.find(params[:id])
    # set_pet
    @pet.update(pet_params)
    respond_to do |f|
      f.html {redirect_to pet_path(@pet)}
      f.json {render json: @pet}
    end
  end

  def destroy
    @pet = Pet.find(params[:id])
    # set_pet
    @pet.destroy
    respond_to do |f|
      f.html {redirect_to user_path(@pet.user)}
      f.json {render json: @pet}
    end
  end




  private

  def pet_params
    params.require(:pet).permit(:name, :kind, :age, :user_id, :color, :hair, :image)
  end

  def set_pet
    @pet = Pet.find(params[:id])
  end




end #end of class

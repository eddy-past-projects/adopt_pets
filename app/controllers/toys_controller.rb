class ToysController < ApplicationController

  def index
    @toys = Toy.all
    respond_to do |f|
      f.html {render :index}
      f.json {render json: @toys}
    end
  end

  def show
    @toy = Toy.find(params[:id])
    respond_to do |f|
      f.html {render :show}
      f.json {render json: @toy}
    end
  end


  private

  def toy_params
    params.require(:toy).permit(:name, :pet_id, :user_id)
  end


end

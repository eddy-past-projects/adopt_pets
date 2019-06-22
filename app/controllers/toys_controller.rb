class ToysController < ApplicationController

  def index
    @toys = Toy.all
  end

  def show
    @toy = Toy.find(params[:id])
  end


  private

  def toy_params
    params.require(:toy).permit(:name, :pet_id, :user_id)
  end


end

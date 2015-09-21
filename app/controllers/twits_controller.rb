class TwitsController < ApplicationController

  def index
    @all_twits = Twit.all
    render :json => @all_twits
  end

  def create
    @twit = Twit.new(twit_params)
    if @twit.save
      render json: @twit
    else
      render json: @twit.errors, status: :unprocessable_entity
    end
  end
  
  def destroy
    @twit = Twit.find(params[:id])
    @twit.destroy
    head :no_content
  end
  
  private 
  def twit_params
    params.require(:twit).permit(:body)
  end
end
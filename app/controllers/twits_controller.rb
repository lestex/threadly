class TwitsController < ApplicationController

  def index
    @new_twit = Twit.new
    @all_twits = Twit.all
    
    render :json => @all_twits
  end

  def create
    @new_twit = Twit.new(twit_params)
    @new_twit.save
    redirect_to root_path
  end
  
  private 
  def twit_params
    params.require(:twit).permit(:body)
  end
end
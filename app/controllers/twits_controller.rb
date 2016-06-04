class TwitsController < ApplicationController
  include CacheHelper

  def index
    @all_twits = get_twits_from_cache
    #@all_twits = Twit.all.reverse
    render json: @all_twits
  end

  def create
    @twit = Twit.new(twit_params)
    if @twit.save
      render json: @twit
      update_twits_in_cache
    else
      render json: @twit.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @twit = Twit.find(params[:id])
    @twit.destroy
    update_twits_in_cache
    head :no_content
  end

  private

  def twit_params
    params.require(:twit).permit(:body)
  end
end
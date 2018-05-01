class HomeController < ApplicationController

	before_action :authenticate_user!

  def index
  end

  def send_message
  	render json: LiveNotifications::W3socket.push('chat', "msg", params[:msg])
  end
end

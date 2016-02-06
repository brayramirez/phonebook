class BaseController < ApplicationController

  before_action :allow_cross_origin_requests, :if => proc { Rails.env.development? }


  def preflight
    render :text => '', :content_type => 'text/plain'
  end

  # def index
  #   render :file => 'public/index.html'
  # end





  private

  def allow_cross_origin_requests
    headers['Access-Control-Allow-Origin'] = 'http://localhost:8080'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Key'
    headers['Access-Control-Max-Age'] = '1728000'
  end

end

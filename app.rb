require 'sinatra'
require 'sinatra/activerecord'

configure :development do
  require 'pry'
end

configure :production do
  require 'newrelic_rpm'
end

set :protection, except: :frame_options

class Email < ActiveRecord::Base; end

get '/' do
  send_file 'views/index.html'
end

post '/' do
  if params[:email] == ''
    status 406
  else
    Email.create(address: params[:email])
    params[:email]
  end
end

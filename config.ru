require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require './app'

configure :production do
  require 'newrelic_rpm'
end

set :protection, except: :frame_options

run Sinatra::Application

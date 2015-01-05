require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require './app'

set :protection, except: :frame_options

run Sinatra::Application

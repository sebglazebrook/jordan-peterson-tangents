require 'sinatra/base'
require "sinatra/reloader"
require "sinatra/activerecord"
require_relative "./lib/models/post"
require_relative "./lib/models/tag"

class App < Sinatra::Base

  set :database_file, "/app/config/database.yml"
  register Sinatra::ActiveRecordExtension

  configure :development do
    register Sinatra::Reloader
  end

  get '/' do
    erb :index, locals: { site_title: "Jordan Peterson Tangents", posts: Post.all }
  end

  run! if app_file == $0
end

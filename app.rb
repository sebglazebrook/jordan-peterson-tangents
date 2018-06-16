require 'sinatra/base'
require "sinatra/reloader"
require "sinatra/activerecord"
require_relative "./lib/models/post"
require_relative "./lib/models/tag"
require "rack/etag"

class App < Sinatra::Base
  use Rack::ETag

  set :public_folder, '/app/public'
  set :database_file, "/app/config/database.yml"
  register Sinatra::ActiveRecordExtension

  configure :development do
    register Sinatra::Reloader
  end

  get '/' do
    erb :index, locals: { site_title: "Jordan Peterson Tangents", posts: Post.all, inline_javascript: File.read("/app/public/javascripts/inline.js"), inline_styles: File.read("/app/public/stylesheets/styles.css") }
  end

  get '/posts/add' do
    erb :"posts/add", locals: {}
  end

  post '/posts' do
    Post.create!(params["post"]) # TODO handle errors and messaging
    redirect "/"
  end

  run! if app_file == $0
end

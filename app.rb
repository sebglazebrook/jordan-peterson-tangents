require 'sinatra/base'
require "sinatra/reloader"

require "ostruct"
def posts_data
  [
    OpenStruct.new({
      title: "Jordan Peterson on Parenting",
      synopsis: "In between talking about the Lion King, Jordan Peterson enlightens us on how you should handle 3 year olds when they are not sharing their toys.",
      video: "https://www.youtube.com/watch?v=Us979jCjHu8&t=1573s",
      start_time: "11:45",
      duration: "4 minutes",
      tags: ["parenting", "life"]
    }),
    OpenStruct.new({
      title: "Jordan Peterson on Nazi Germany",
      synopsis: "Peterson tells us why WW2 happened.",
      video: "https://www.youtube.com/watch?v=Us979jCjHu8&t=1573s",
      start_time: "04:01",
      duration: "21 minutes",
      tags: ["ww2", "war", "Germany"]
    }),
  ]
end

class App < Sinatra::Base
  configure :development do
    register Sinatra::Reloader
  end

  get '/' do
    erb :index, locals: { site_title: "Hello World!", posts: posts_data }
  end

  run! if app_file == $0
end

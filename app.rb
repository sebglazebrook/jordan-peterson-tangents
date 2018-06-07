require 'sinatra/base'
require "sinatra/reloader"

require "ostruct"
def posts_data
  [
    OpenStruct.new({ title: "First post", content: "Here's the first post", tags: ["first tag", "second tag"] }),
    OpenStruct.new({ title: "Second post", content: "Here's the second post", tags: ["second tag", "third tag"] }),
    OpenStruct.new({ title: "Third post", content: "Here's the second post", tags: ["forth tag", "third tag"] })
  ]
end

class App < Sinatra::Base
  configure :development do
    register Sinatra::Reloader
  end

  get '/' do
    erb :index, locals: { posts: posts_data }
  end

  run! if app_file == $0
end

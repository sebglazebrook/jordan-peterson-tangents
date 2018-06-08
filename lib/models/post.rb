class Post < ActiveRecord::Base

  has_and_belongs_to_many :tags

  default_scope { order(created_at: :desc)  }

end

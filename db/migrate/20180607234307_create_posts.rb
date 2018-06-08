class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |table|
      table.string :title
      table.string :synopsis
      table.string :video_url
      table.string :start_time
      table.string :duration
    end
  end
end

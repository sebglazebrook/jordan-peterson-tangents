class AddTagsToPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts_tags do |table|
      table.integer :tag_id
      table.integer :post_id
    end
  end
end

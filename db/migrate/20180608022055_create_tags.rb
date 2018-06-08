class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |table|
      table.string :text
      table.timestamps
    end
  end
end

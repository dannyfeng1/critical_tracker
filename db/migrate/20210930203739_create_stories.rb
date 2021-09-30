class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :title, null: false
      t.string :description
      t.string :story_type, null: false
      t.string :story_state, null: false
      t.boolean :priority, null: false
      
      t.integer :points
      t.integer :story_owner_id, null: false
      t.integer :project_id, null: false
      t.timestamps
    end

    add_index :stories, :project_id
    add_index :stories, :story_owner_id
  end
end

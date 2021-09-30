class CreateAssignedStories < ActiveRecord::Migration[5.2]
  def change
    create_table :assigned_stories do |t|
      t.integer :assigned_user_id, null: false
      t.integer :story_id, null: false
      t.timestamps
    end

    add_index :assigned_stories, :assigned_user_id
    add_index :assigned_stories, :story_id
  end
end

class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :description
      t.integer :project_owner_id, null: false
      t.timestamps
    end

    add_index :projects, :project_owner_id
  end
end

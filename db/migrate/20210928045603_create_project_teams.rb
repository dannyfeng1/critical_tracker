class CreateProjectTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :project_teams do |t|
      t.integer :project_id, null: false
      t.integer :user_id, null: false
      t.timestamp
    end

    add_index :project_teams, :user_id
    add_index :project_teams, :project_id
    add_index :project_teams, [:project_id, :user_id], unique: true
  end
end
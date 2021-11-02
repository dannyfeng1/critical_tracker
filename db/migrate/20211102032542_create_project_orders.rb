class CreateProjectOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :project_orders do |t|
      t.integer :project_id, null: false
      t.text :backlog, array: true, default: []
      t.text :icebox, array: true, default: []
      t.timestamps
    end
  end
end

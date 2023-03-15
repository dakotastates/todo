class CreateListTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :list_tasks do |t|
      t.references :list, null: false, foreign_key: true
      t.references :task, null: false, foreign_key: true

      t.timestamps
    end
  end
end

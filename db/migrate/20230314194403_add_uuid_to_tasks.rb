class AddUuidToTasks < ActiveRecord::Migration[7.0]
  def change
    add_column :tasks, :uuid, :string
  end
end

class AddFavoritedToTasks < ActiveRecord::Migration[7.0]
  def change
    add_column :tasks, :favorited, :boolean, default: false
  end
end

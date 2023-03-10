class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :details
      t.boolean :completed, default: false
      t.string :priority
      t.string :category
      t.datetime :alert_datetime
      t.belongs_to :user, null: false, foreign_key: true
      t.boolean :repeat, default: false

      t.timestamps
    end
  end
end

class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.references :user, null: false, foreign_key: true
      t.string :birthday
      t.string :email
      t.string :website
      t.string :company
      t.string :job_title
      t.string :department
      t.string :middle_name
      t.string :prefix
      t.string :nickname
      t.string :notes

      t.timestamps
    end
  end
end

class List < ApplicationRecord
  belongs_to :user 
  has_many :listTasks
  has_many :tasks, through: :listTasks
end

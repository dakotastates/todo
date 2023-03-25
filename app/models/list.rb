class List < ApplicationRecord
  belongs_to :user 
  has_many :list_tasks, dependent: :destroy
  has_many :tasks, through: :list_tasks, dependent: :destroy
end

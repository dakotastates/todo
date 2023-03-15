class Task < ApplicationRecord
    belongs_to :user 

    has_one :listTask
    has_one :list, through: :listTask
end

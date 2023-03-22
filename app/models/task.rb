class Task < ApplicationRecord
    

    belongs_to :user 

    has_one :list_task, dependent: :destroy
    has_one :list, through: :list_task
    
    accepts_nested_attributes_for :list_task
    # after_create do 
    #     ListTask.create!(task_id: id, list_id: list.id)
    # end
    
end

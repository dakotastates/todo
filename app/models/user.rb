class User < ApplicationRecord
    has_secure_password
    has_many :tasks
    has_many :lists 
    has_many :contacts

    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' } 

    after_create do 
        self.lists.create({name: 'My Tasks'})
    end
end

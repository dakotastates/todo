class ContactSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :email, :company, :job_title, :birthday, :middle_name, :notes
  
end
  
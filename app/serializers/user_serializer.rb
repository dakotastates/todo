class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :phone, :first_name, :last_name, :tasks, :lists

end

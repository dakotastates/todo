class TaskSerializer < ActiveModel::Serializer
    attributes :id, :uuid, :title, :details, :completed, :priority, :category, :alert_datetime, :repeat, :favorited, :list
  
end
  
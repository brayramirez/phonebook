class EntrySerializer < ActiveModel::Serializer
  attributes :id, :name, :number, :email, :description
end

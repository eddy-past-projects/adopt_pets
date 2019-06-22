class ToysSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :pet
end

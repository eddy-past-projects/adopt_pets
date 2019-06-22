class ToysSerializer < ActiveModel::Serializer
  attributes :id, :name, :pet_id

  belongs_to :pet
  #
  # def pet_id
  #   self.object.pet.name
  # end
end

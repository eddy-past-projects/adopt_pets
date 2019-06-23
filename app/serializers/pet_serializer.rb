class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :kind, :age, :user_id, :color, :hair, :hungry, :sitter, :image

  belongs_to :user



  # def user_id
  #   self.object.user.name
  # end



end

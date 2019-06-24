class User < ApplicationRecord
  has_secure_password

  has_many :pets

  has_many :toys





  # def self.away?
  #   self.all.each do |person|
  #     if person.home == true
  #       person.home = false
  #     else
  #       person.home = true
  #     end
  #   end
  # end
  #
  # def self.most_pets
  #   @sort_pets = self.all.sort_by do |person|
  #     person.pets.length
  #
  #   end
  #   @sort_pets
  # end






end #end of class

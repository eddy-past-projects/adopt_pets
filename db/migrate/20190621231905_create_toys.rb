class CreateToys < ActiveRecord::Migration[5.2]
  def change
    create_table :toys do |t|
      t.string :name
      t.integer :pet_id
      t.timestamps
    end
  end
end

class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string "name"
      t.string "kind"
      t.integer "age"
      t.integer "user_id"
      t.string "color"
      t.string "hair"
      t.string :image
      t.boolean "hungry", default: true
      t.boolean "sitter", default: false
      t.timestamps
    end
  end
end

class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.float :price, null: false
      t.string :desc, null: false
      t.integer :vendor_id, null: false

      t.timestamps
    end
    add_index :products, :product_name, unique: true
    add_index :products, :vendor_id
  end
end

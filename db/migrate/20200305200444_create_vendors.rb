class CreateVendors < ActiveRecord::Migration[5.2]
  def change
    create_table :vendors do |t|
      t.string :vendor_name, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end
    add_index :vendors, :vendor_name, unique: true
    add_index :vendors, :owner_id
  end
end

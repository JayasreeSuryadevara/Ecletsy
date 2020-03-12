class CreateShoppingCartsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :shopping_carts do |t|
      t.integer :user_id, null: false
      t.boolean :resolved, default: false

      t.timestamps
    end
    add_index :shopping_carts, :user_id, unique: true
  end
end

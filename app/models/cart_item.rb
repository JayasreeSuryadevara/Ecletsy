# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  cart_id    :integer          not null
#  product_id :integer          not null
#
# Indexes
#
#  index_cart_items_on_cart_id_and_product_id  (cart_id,product_id) UNIQUE
#
class CartItem < ApplicationRecord
    validates :product_id, :cart_id, presence: true
    validates :quantity, numericality: { greater_than: 0 }, presence: true

    belongs_to :cart,
        class_name: :ShoppingCart,
        foreign_key: :cart_id

    belongs_to :product,
        class_name: :Product,
        foreign_key: :product_id
end

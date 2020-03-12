# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  desc         :string           not null
#  price        :float            not null
#  product_name :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  vendor_id    :integer          not null
#
# Indexes
#
#  index_products_on_product_name  (product_name) UNIQUE
#  index_products_on_vendor_id     (vendor_id)
#
class Product < ApplicationRecord

    validates :product_name, presence: true, uniqueness: true
    validates :desc, presence: true
    validates :price, numericality: { greater_than: 0 }, presence: true
    validates :vendor_id, presence: true

    belongs_to :vendor,
        class_name: :Vendor,
        foreign_key: :vendor_id
    
    has_many :cart_items,
        class_name: :CartItem,
        foreign_key: :product_id
        
    has_one_attached :photo
end

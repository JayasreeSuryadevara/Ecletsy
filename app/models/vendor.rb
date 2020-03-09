# == Schema Information
#
# Table name: vendors
#
#  id          :bigint           not null, primary key
#  vendor_name :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  owner_id    :integer          not null
#
# Indexes
#
#  index_vendors_on_owner_id     (owner_id)
#  index_vendors_on_vendor_name  (vendor_name) UNIQUE
#
class Vendor < ApplicationRecord
    validates :vendor_name, presence: true, uniqueness: true
    validates :owner_id, presence: true


    has_many :products,
        class_name: :Product,
        foreign_key: :vendor_id

    belongs_to :owner,
        class_name: :User,
        foreign_key: :owner_id

    has_one_attached :photo
    
end

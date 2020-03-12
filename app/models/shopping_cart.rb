# == Schema Information
#
# Table name: shopping_carts
#
#  id         :bigint           not null, primary key
#  resolved   :boolean          default("false")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_shopping_carts_on_user_id  (user_id) UNIQUE
#
class ShoppingCart < ApplicationRecord
    validates :resolved, inclusion: {in: [false, true]}

    has_many :cart_items,
        class_name: :CartItem,
        foreign_key: :cart_id

    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id

end

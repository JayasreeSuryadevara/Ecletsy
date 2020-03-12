json.extract! cart_item, :id, :product_id, :cart_id, :quantity

json.product_name = cart_item.product.product_name
json.user_id = cart_item.cart.user_id 

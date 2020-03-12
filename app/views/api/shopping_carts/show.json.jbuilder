if @shopping_cart
    json.partial! "shopping_cart", shopping_cart: @shopping_cart
end
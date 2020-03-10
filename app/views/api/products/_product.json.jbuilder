json.extract! product, :id, :product_name, :desc, :price, :vendor_id

if product.photo.attached?
    json.image_url url_for(product.photo)
end   
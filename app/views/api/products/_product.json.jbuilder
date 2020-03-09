json.extract! product, :id, :product_name, :desc, :price, :vendor_id

if product.photo.attached?
    json.imageUrls product.photo.map { |file| url_for(file) }
end   
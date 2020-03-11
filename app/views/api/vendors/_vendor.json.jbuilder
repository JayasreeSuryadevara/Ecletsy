json.extract! vendor, :id, :vendor_name, :owner_id

json.products vendor.products
json.ownerName vendor.owner.username
json.ownerEmail vendor.owner.email

if vendor.photo.attached?
    json.image_url url_for(vendor.photo)
end   
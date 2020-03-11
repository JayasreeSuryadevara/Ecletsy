json.extract! user, :id, :email, :username

if user
    if user.photo.attached?
        json.image_url url_for(user.photo)
    end

    if user.vendor
        json.vendorId user.vendor.id
    else
        json.vendorId nil
    end
    if user == current_user
        json.vendor user.vendor
        # json.hasLineItems user.line_items.length > 0
    end
end
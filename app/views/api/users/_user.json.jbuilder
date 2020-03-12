json.extract! user, :id, :email, :username

if user
    if user.vendor
        json.vendorId user.vendor.id
    else
        json.vendorId nil
    end
    if user == current_user
        json.vendor user.vendor
        json.cart user.cart
    end
end
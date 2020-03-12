export const fetchCartItems = (userId) => {
    return $.ajax({
        method: "GET",
        url: `api/users/${userId}/cart_items`
    })
}
export const createCartItem = (cart_item) => {
    return $.ajax({
        method: "POST",
        url: `api/users/${cart_item.user_id}/cart_items`,
        data: { cart_item }
    });
}
export const updateCartItem = (cart_item) => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${cart_item.user_id}/cart_items/${cart_item.id}`,
        data: { cart_item }
    });
}
export const deleteCartItem = (cart_item) => {
    return $.ajax({
        method: "DELETE",
        url: `api/users/${cart_item.user_id}/cart_items/${cart_item.id}`,
    });
}
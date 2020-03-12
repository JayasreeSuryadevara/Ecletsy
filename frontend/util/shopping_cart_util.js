export const fetchShoppingCart = (userId) => {
    return $.ajax({
        method: "GET",
        url: `api/shopping_cart`
    })
}
export const createShoppingCart = (shopping_cart) => {

    return $.ajax({
        method: "POST",
        url: `api/shopping_cart`,
        data: { shopping_cart }
    });
}
export const updateShoppingCart = (shopping_cart) => {
    return $.ajax({
        method: "PATCH",
        url: `api/shopping_cart`,
        data: { shopping_cart }
    });
}
export const deleteShoppingCart = (shopping_cart) => {
    return $.ajax({
        method: "DELETE",
        url: `api/shopping_cart`,
    });
}
export const fetchProducts = () => {
    return $.ajax({
        method: "GET",
        url: `api/products`
    })
}
export const fetchProduct = (productId) => {
    return $.ajax({
        method: "GET",
        url: `api/products/${productId}`
    });
}
export const deleteProduct = (productId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/products/${productId}`
    });
}
export const updateProduct = (product) => {
    return $.ajax({
        method: "PATCH",
        url: `api/products/${product.id}`,
        data: { product }
    });
}
export const createProduct = formData => {
    return $.ajax({
        method: "POST",
        url: `/api/vendors/${formData.get('product[vendor_id]')}/products`,
        data: formData,
        contentType: false,
        processData: false
    });
}
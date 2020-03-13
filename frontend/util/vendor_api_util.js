export const fetchVendors = () => {
    return $.ajax({
        method: "GET",
        url: `api/vendors`
    })
}
export const fetchVendor = (vendorId) => {
    return $.ajax({
        method: "GET",
        url: `api/vendors/${vendorId}`
    });
}
export const deleteVendor = (vendorId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/vendors/${vendorId}`
    });
}
export const updateVendor = (vendor) => {
    return $.ajax({
        method: "PATCH",
        url: `api/vendors/${vendor.id}`,
        data: { vendor }
    });
}
export const createVendor = (vendor) => {
    return $.ajax({
        method: "POST",
        url: `api/vendors`,
        data: formData,
        contentType: false,
        processData: false
    });
}
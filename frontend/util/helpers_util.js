export const getCurrentUser = (state) => {
    return state.session.currentUser;
};
export const getCurrentUserId = (currentUser) => {
    if (!currentUser) return false;
    return currentUser.id;
};
export const getVendorId = (currentUser) => {
    if (!currentUser || currentUser === undefined) return false;
    return currentUser.vendorId;
};

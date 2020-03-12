import * as APIUtil from '../util/cart_items_util';

export const RECEIVE_ALL_CART_ITEMS = "RECEIVE_ALL_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

const receiveAllCartItems = (cartItems) => {
    return {
        type: RECEIVE_ALL_CART_ITEMS,
        cartItems
    }
};
const receiveCartItem = (cartItem) => {
    return {
        type: RECEIVE_CART_ITEM,
        cartItem
    }
};
const removeCartItem = (cartItemId) => {
    return {
        type: REMOVE_CART_ITEM,
        cartItemId
    }
};

export const fetchCartItems = (userId) => (dispatch) => {
    return APIUtil.fetchCartItems(userId)
        .then((cartItems) => dispatch(receiveAllCartItems(cartItems)))
};
export const createCartItem = (cartItem) => (dispatch) => {
    return APIUtil.createCartItem(cartItem)
        .then((cartItem) => dispatch(receiveCartItem(cartItem)))
};
export const updateCartItem = (cartItem) => (dispatch) => {
    return APIUtil.updateCartItem(cartItem)
        .then((cartItem) => dispatch(receiveCartItem(cartItem)))
};
export const deleteCartItem = (cartItem) => (dispatch) => {
    return APIUtil.deleteCartItem(cartItem)
        .then((cartItem) => dispatch(removeCartItem(cartItem.id)))
};
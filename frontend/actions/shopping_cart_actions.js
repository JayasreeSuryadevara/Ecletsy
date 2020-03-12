import * as APIUtil from '../util/shopping_cart_util';

export const RECEIVE_CART = "RECEIVE_CART";
export const REMOVE_CART = "REMOVE_CART";

const receiveShoppingCart = (shopping_cart) => {
    return {
        type: RECEIVE_CART,
        shopping_cart
    }
};
const removeShoppingCart = (shoppingCartId) => {
    return {
        type: REMOVE_CART,
        shoppingCartId
    }
};

export const createShoppingCart = (shopping_cart) => (dispatch) => {
    return APIUtil.createShoppingCart(shopping_cart)
        .then((shopping_cart) => dispatch(receiveShoppingCart(shopping_cart)))
};
export const updateShoppingCart = (shopping_cart) => (dispatch) => {
    return APIUtil.updateShoppingCart(shopping_cart)
        .then((shopping_cart) => dispatch(receiveShoppingCart(shopping_cart)))
};
export const deleteShoppingCart = (shopping_cart) => (dispatch) => {
    return APIUtil.deleteShoppingCart(shopping_cart)
        .then((shopping_cart) => dispatch(removeShoppingCart(shopping_cart.id)))
};
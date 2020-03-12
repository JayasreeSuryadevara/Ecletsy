import {
    RECEIVE_CART,
    REMOVE_CART
} from '../actions/shopping_cart_actions';

const ShoppingCartsReducer = (oldState = {}, action) => {

    Object.freeze(oldState);

    switch (action.type) {

        case RECEIVE_CART:
            if (action.cart.id) {
                return Object.assign({}, oldState, { [action.cart.id]: action.cart });
            } else {
                return oldState;
            }

        case REMOVE_CART:
            const newState = Object.assign({}, oldState);
            delete newState[action.cartId];
            return newState;

        default:
            return oldState;

    }
};

export default ShoppingCartsReducer;
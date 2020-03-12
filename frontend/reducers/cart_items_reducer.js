import {
    RECEIVE_ALL_CART_ITEMS,
    RECEIVE_CART_ITEM,
    REMOVE_CART_ITEM
} from '../actions/cart_items_actions';

const cartItemsReducer = (oldState = {}, action) => {

    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_CART_ITEMS:
            return Object.assign({}, action.cartItems);

        case RECEIVE_CART_ITEM:
            if (action.cartItem.id) {
                return Object.assign({}, oldState, { [action.cartItem.id]: action.cartItem });
            } else {
                return oldState;
            }

        case REMOVE_CART_ITEM:
            const newState = Object.assign({}, oldState);
            delete newState[action.cartItemId];
            return newState;

        default:
            return oldState;
    }
};

export default cartItemsReducer;
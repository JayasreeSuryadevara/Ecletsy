import {
    RECEIVE_PRODUCT_ERRORS
    , RECEIVE_PRODUCT
} from "../actions/product_actions";

const productErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_PRODUCT_ERRORS:
            return action.errors;

        case RECEIVE_PRODUCT:
            return [];

        default:
            return oldState;
    }
};

export default productErrorsReducer;
import { 
    RECEIVE_ALL_PRODUCTS, 
    RECEIVE_PRODUCT, 
    REMOVE_PRODUCT 
} from '../actions/product_actions';

const productsReducer = ( oldState = {}, action ) => {

    Object.freeze(olsState);

    switch ( action.type ) {
        case RECEIVE_ALL_PRODUCTS:
            return Object.assign( {}, action.products );
        case RECEIVE_PRODUCT:
            return Object.assign( {}, oldState, { [action.product.id]: action.product } );
        case REMOVE_PRODUCT:
            let newState = Object.assign( {}, oldState );
            delete newState[action.productId];
            return newState;
        default:
            return oldState;
    }

};

export default productsReducer;

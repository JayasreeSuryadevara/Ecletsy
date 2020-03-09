import {
    RECEIVE_ALL_VENDORS,
    RECEIVE_VENDOR,
    REMOVE_VENDOR
} from "../actions/store_actions";

const vendorsReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_VENDORS:
            return Object.assign({}, action.vendors);

        case RECEIVE_VENDOR:
            return Object.assign({}, oldState, { [action.vendors.id]: action.vendors });

        case REMOVE_VENDOR:
            let newState = Object.assign({}, oldState);
            delete newState[action.vendorId];
            return newState;

        default:
            return oldState;
    }
};

export default vendorsReducer;
import {
    RECEIVE_ALL_VENDORS,
    RECEIVE_VENDOR
} from "../actions/vendor_actions";

const vendorsReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);

    switch (action.type) {

        case RECEIVE_ALL_VENDORS:
            return Object.assign({}, action.vendors);

        case RECEIVE_VENDOR:
            return Object.assign({}, oldState, { [action.vendor.id]: action.vendor });

        default:
            return oldState;
    }
};

export default vendorsReducer;
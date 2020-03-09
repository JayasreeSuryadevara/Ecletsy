import {
    RECEIVE_VENDOR_ERRORS,
    RECEIVE_VENDOR
} from "../actions/vendor_actions";

const vendorErrorsReducer = (oldState = [], action) => {

    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_VENDOR_ERRORS:
            return action.errors;

        case RECEIVE_VENDOR:
            return [];

        default:
            return oldState;
    }
};

export default vendorErrorsReducer;
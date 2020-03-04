import { 
    ENABLE_MODAL, 
    DISABLE_MODAL 
} from "../actions/modal_actions";

const modalReducer = (oldState = null, action) => {

    switch (action.type) {
        case ENABLE_MODAL:
            return action.modal;
        case DISABLE_MODAL:
            return null;
        default:
            return oldState;
    }
    
};

export default modalReducer;
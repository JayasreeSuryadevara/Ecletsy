import { 
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER 
} from '../actions/session_actions';

const _nullUser = { id: null };

const sessionReducer = (oldState = _nullUser, action) => {

    Object.freeze(oldState);

    console.log("currentuser in session reducer", action.currentUser);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { id: action.currentUser.id });
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return oldState;
    }

};

export default sessionReducer;
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {

    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign( {}, oldState, { [action.currentUser.id]: action.currentUser } );

        case RECEIVE_ALL_USERS:
            return Object.assign({}, action.users);

        default:
            return oldState;
    }
};

export default usersReducer;
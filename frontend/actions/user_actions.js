import * as UserAPIUtil from "../util/users_api_util";
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveAllUsers = (users) => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
};

export const fetchAllUsers = () => (dispatch) => {
    return UserAPIUtil.fetchAllUsers()
        .then((users) => dispatch(receiveAllUsers(users)))
}
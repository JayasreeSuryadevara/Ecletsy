import { combineReducers } from 'redux';

import users from './users_reducer';
import products from './products_reducer';
import vendors from './vendors_reducer';

export default combineReducers({
    users,
    products,
    vendors
});
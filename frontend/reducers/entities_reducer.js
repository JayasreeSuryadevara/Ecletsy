import { combineReducers } from 'redux';

import users from './users_reducer';
import products from './products_reducer';
import vendors from './vendors_reducer';
import shopping_carts from './shopping_carts_reducer';
import cart_items from './cart_items_reducer';

export default combineReducers({
    users,
    products,
    vendors,
    shopping_carts,
    cart_items
});
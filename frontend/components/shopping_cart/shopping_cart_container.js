import { connect } from 'react-redux';
import ShoppingCartShow from './shopping_cart_show';

const mapStateToProps = state => {
    const currentUser = state.entities.users[state.session.id];
    const cartItems = Object.values(state.entities.cart_items);
    const cart = state.entities.users[state.session.id].cart;
    return {
        currentUser,
        cartItems,
        cart
    };
};

const mapDispatchToProps = dispatch => ({
    deleteCartItem: cartItem => dispatch(deleteCartItem(cartItem)),
    updateCartItem: cartItem => dispatch(updateCartItem(cartItem))
});

export default connect( mapStateToProps, mapDispatchToProps)(ShoppingCartShow);
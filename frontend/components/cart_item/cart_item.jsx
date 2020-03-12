import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createShoppingCart,fetchShoppingCart } from '../../actions/shopping_cart_actions';
import { createCartItem, updateCartItem } from '../../actions/cart_items_actions';
import { enableModal } from '../../actions/modal_actions';

class CartItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product_id: this.props.product.id,
            cart_id: "",
            quantity: "1"
        }
        this.handleAddItem = this.handleAddItem.bind(this);
    };

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    };

    handleAddItem(e){
        e.preventDefault();
        if (!this.props.currentUser) {
            this.props.enableModal()
        } else {
            if(!this.props.cartItem){
                const cartId = this.props.cart.id;
                const cartItem = {
                    product_id: this.state.product_id,
                    cart_id: cartId,
                    quantity: this.state.quantity
                }
                this.props.createCartItem(cartItem);
                this.props.history.push(`/shopping_cart`);
            } else {
                alert('You already have this item in your cart!');
            }
        }
    };

    render(){
        return (
            <div className="cart-item-main">
                <form onSubmit={this.handleAddItem}>
                    <label> Quantity </label>
                    <br />
                    <input required type="text" 
                        value={this.state.quantity}
                        onChange={this.update('quantity')}
                        className="cart-item-quantity"/>
                    <br />
                    <input
                        type="submit"
                        className="add-to-cart-btn"
                        value=" Add To Cart "
                    />
                    <br />
                </form>
                <div className="cart-item-info-under-divider">
                    <div className="cart-item-div">
                        <i class="fas fa-truck fa-2x"></i>
                        <p>
                            <b>Nice choice! </b>
                            Enjoy free shipping to the US when you spend $35+ at this shop.
                        </p>
                    </div>
                    <div className="cart-item-div">
                        <i class="fas fa-cart-arrow-down fa-2x"></i>
                        <p>
                            Other people want this. 3 people have this in their carts right now.
                        </p>
                    </div>
                    <div className="cart-item-div">
                        <i class="fas fa-hand-paper fa-2x"></i>
                        <h3>
                            Handmade
                        </h3>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    cart: state.entities.users[state.session.id].cart
});

const mapDispatchToProps = dispatch => ({
    createShoppingCart: cart => dispatch(createShoppingCart(cart)),
    createCartItem: cartItem => dispatch(createCartItem(cartItem)),
    updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
    fetchShoppingCart: user => dispatch(fetchShoppingCart(user)),
    enableModal: (mode) => dispatch(enableModal(mode))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartItem));
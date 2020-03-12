import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartShow extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

    }
    
    render(){
        const cartItems = this.props.cartItems;
        console.log("in s c show", cartItems);
        const currentUser = this.props.currentUser;
        const cartItemsCount = cartItems.length;
        if (cartItemsCount === 0) {
            return (
                <div className="cart-empty">
                    <h2>  {currentUser.username}</h2>
                    <h2>Your cart is empty.</h2>
                    <Link to="/" className="cart-link" >Discover something unique to fill it up</Link>
                </div>
            );
        } else {
            return (
                <div>
                    <form onSubmit="this.handleSubmit" className="shopping-cart-show">
                        <h2>  { currentUser.username}</h2>
                        <h2> You have {`${cartItemsCount}`} items in your cart!</h2>
                        <ul>
                            {cartItems.map(cartItem => {
                                <li key="cartItem.id">
                                    <span>
                                        <label>Name</label>
                                        {cartItem.product_name}
                                    </span>
                                    <span>
                                        <label>Quantity</label>
                                        {cartItem.quantity}
                                    </span>
                                    <button>
                                        Pay with Paypal
                                    </button>
                                </li>
                            })}
                        </ul>
    
                    </form>
    
                </div>
            );
        }
    }

}

export default ShoppingCartShow;
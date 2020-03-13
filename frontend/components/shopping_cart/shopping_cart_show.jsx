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
        console.log("cart-items", cartItems);
        const currentUser = this.props.currentUser;
        const cartItemsCount = cartItems.length;
        if (cartItemsCount === 0) {
            return (
                <div className="cart-empty">
                    <h2>  {currentUser.username}</h2>
                    <h2>Your cart is empty.</h2>
                    <div className="fill-up-link">
                        <Link to="/" className="cart-link" >Discover something unique to fill it up</Link>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="shopping-cart-show">
                    {/* <form onSubmit={this.handleSubmit} > */}
                        <h2> Hello  { currentUser.username}</h2>
                        <h2> You have {`${cartItemsCount}`} items in your cart!</h2>
                        <ul>
                            {cartItems.map(cartItem => {
                                return(
                                    <li key="cartItem.id">
                                        <span>
                                            <label>Name</label>
                                            {cartItem.product_name}
                                        </span>
                                        <br />
                                        <span>
                                            <label>Quantity</label>
                                            {cartItem.quantity}
                                        </span>
                                        <br />
                                        <button>
                                            Pay with Paypal
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
    
                    {/* </form> */}
    
                </div>
            );
        }
    }

}

export default ShoppingCartShow;
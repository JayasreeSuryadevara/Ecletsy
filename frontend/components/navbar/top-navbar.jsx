import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

class TopNavBar extends React.Component {
    constructor(props){
        super(props);
        this.toVendorOwnerPage = this.toVendorOwnerPage.bind(this);
        this.toShoppingCartPage = this.toShoppingCartPage.bind(this);
    }

    toVendorOwnerPage(e) {
        e.preventDefault();
        let { vendorId } = this.props;
        const storeLink = vendorId ? `/vendors/${vendorId}` : "/vendors";
        this.props.history.push(storeLink);
    }

    toShoppingCartPage(e) {
        e.preventDefault();
        this.props.history.push(`/shopping_cart`)
    }

    loggedin_navbar() {
        return (
            <div className="logged-bar-container">

                <div className="navbar-store-icon" onClick={this.toVendorOwnerPage}>
                    <i class="fas fa-store fa-2x"></i>
                    <p className="navbar-seller">Seller</p>
                </div>

                <GreetingContainer />

                <div className="shopping-cart" onClick={this.toShoppingCartPage}>
                    <i class="fas fa-cart-arrow-down fa-2x"></i>
                </div>
                
            </div>
        );
    };
    

    loggedout_navbar() {
        return (
            <div className="logged-bar-container">
                <GreetingContainer />
                <div className="shopping-cart" onClick={this.toShoppingCartPage}>
                    <i class="fas fa-cart-arrow-down fa-2x"></i>
                </div>
            </div>
        );
    };

    render(){
        return this.props.currentUser ? this.loggedin_navbar() : this.loggedout_navbar();
    }
};

export default TopNavBar;
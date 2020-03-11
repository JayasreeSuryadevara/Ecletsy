import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

class TopNavBar extends React.Component {
    constructor(props){
        super(props);
        this.toVendorOwnerPage = this.toVendorOwnerPage.bind(this);
    }

    toVendorOwnerPage(e) {
        e.preventDefault();
        console.log("props in topnavbar", this.props);
        let { vendorId } = this.props;
        const storeLink = vendorId ? `/vendors/${vendorId}` : "/vendors";
        this.props.history.push(storeLink);
    }

    loggedin_navbar() {
        return (
            <div className="logged-bar-container">

                <div className="navbar-store-icon" onClick={this.toVendorOwnerPage}>
                    <i class="fas fa-store"></i>
                    <p className="navbar-seller">Seller</p>
                </div>

                <GreetingContainer />
            </div>
        );
    };
    

    loggedout_navbar() {
        return (
            <div className="logged-bar-container">
                <GreetingContainer />
            </div>
        );
    };

    render(){
        return this.props.currentUser ? this.loggedin_navbar() : this.loggedout_navbar();
    }
};

export default TopNavBar;
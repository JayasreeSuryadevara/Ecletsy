import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, enableModal }) => {

    const sessionLinks = () => (
        <div className="login-signup">
            <button className="header_login_button"
                onClick={() => enableModal('login')} >
                    Sign in
            </button>
        </div>
    );
    const personalGreeting = () => (
        <div className="dropdown-main">
            <button className="dropdown-btn">

                <div className="dropdown-button-profile-pic">
                    <i class="fas fa-user-circle fa-2x"></i>
                </div>
                <div className="user-icon-down-arrow">
                    <i class="fas fa-sort-down fa-2x"></i>
                </div>

            </button>
            <div className="dropdown-bridge"></div>

            <div className="user-profile-dropdown-menu">

                <div className="dropdown-header-container">
                    <div className="dropdown-header">
                        <div id="dropdown-profile-pic" className="view-profile-pic-container">
                            <i class="fas fa-user-circle fa-2x"></i>
                        </div>
                        <div className="dropdown-user-name">{currentUser.username}</div>
                    </div>
                </div>
                <div className="dropdown-create-shop">
                    <Link to="/vendors">Sell your own products</Link>
                </div>
                <div className="dropdown-content">
                    <div className="dropdown-signout-container">
                        <a href="#" onClick={logout} className="logout-btn">Sign out</a>
                    </div>
                </div>
            </div>

        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;

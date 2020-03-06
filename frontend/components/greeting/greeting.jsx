import React from 'react';
import { Link } from 'react-router-dom';
// import DropDownContainer from '../drop-down/drop_down_container';

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
                    <i class="fas fa-user-circle"></i>
                </div>
                <div className="user-icon-down-arrow">
                    <i class="fas fa-sort-down"></i>
                </div>

            </button>
            <div className="dropdown-bridge"></div>

            <div className="user-profile-dropdown-menu">

                <div className="dropdown-header-container">
                    <div className="dropdown-header">
                        <div id="dropdown-profile-pic" className="view-profile-pic-container">
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <div className="dropdown-user-name">{currentUser.username}</div>
                    </div>
                </div>

                <div className="dropdown-content">
                    <div className="dropdown-signout-container">
                        <a href="#" onClick={logout} className="logout-btn">Sign out</a>
                    </div>
                </div>
            </div>

        </div>
    );

    // const personalGreeting = () => {
    //     console.log("curent user in greeting ", currentUser);
    //     return (
    //         <div className="header-group">
    //             <DropDownContainer />
    //         </div>
    //     );
    // };

    // const personalGreeting = () => (
    //     <hgroup className="header-group">
    //         <h2 className="header-name">Welcome back, {currentUser.username}!</h2>
    //         <button className="logout_button" onClick={logout}>Log Out</button>
    //     </hgroup>
    // );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;

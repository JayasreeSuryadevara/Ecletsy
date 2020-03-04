import React from 'react';
import { enableModal, disableModal } from '../../actions/modal_actions';



const Greeting = ({ currentUser, logout, enableModal }) => {
    console.log("currentUser in greeting form" ,currentUser);

    const sessionLinks = () => (
        <nav className="login-signup">
            <span className="login_link">
                <a href="#" onClick={() => enableModal('login')} >
                    Sign in
                </a>
            </span>
        </nav>
    );

    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Welcome back, {currentUser.username}!</h2>
            <button className="logout_button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;

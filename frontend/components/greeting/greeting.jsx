import React from 'react';

const Greeting = ({ currentUser, logout, enableModal }) => {

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

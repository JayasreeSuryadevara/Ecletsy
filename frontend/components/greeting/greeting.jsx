import React from 'react';
import { Link } from 'react-router-dom';
// import { enableModal, disableModal } from '../../actions/modal_actions';



const Greeting = ({ currentUser, logout, enableModal }) => {
    // const sessionLinks = () => (
    //     <nav className="login-signup">
    //         <span className="register_link">
    //             <a href="#" onClick={() => enableModal('signup')} >
    //                 Register
    //             </a>
    //         </span>
    //         <span>  or  </span>
    //         <span className="login_link">
    //             <a href="#" onClick={() => enableModal('login')} >
    //                 Sign in
    //             </a>
    //         </span>
    //     </nav>
    // );
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            <span> or </span>
            <Link to="/signup">Sign up!</Link>
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

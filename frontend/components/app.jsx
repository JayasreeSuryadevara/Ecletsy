import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
 
import GreetingContainer from './greeting/greeting_container';
import NavBarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import HomePageContainer from '../components/homepage/homepage_container';
import NoMatchPage from '../components/homepage/no_match_page';
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import ProductShowContainer from '../components/products/product_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Modal />
        <header className="logo_greeting">
            <div className="header-top-bar">
                <Link to="/" className="header-logo-link">Ecletsy</Link>
                <GreetingContainer />
            </div>
            <div className="header-bottom-bar">
                <NavBarContainer />  
            </div>
        </header>
        <Switch>
            <Route exact path="/" component={HomePageContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/products/:id" component={ProductShowContainer} />
            <Route component={NoMatchPage} />
        </Switch>
    </div>
);

export default App;

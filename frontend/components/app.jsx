import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
 
import TopNavBarContainer from './navbar/top_navbar_container';
import BottomNavBar from './navbar/bottom-nav-bar';
import Modal from './modal/modal';
import HomePageContainer from '../components/homepage/homepage_container';
import NoMatchPage from '../components/homepage/no_match_page';
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import ProductShowContainer from '../components/products/product_show_container';
import CreateProductContainer from '../components/products/create_product_container';
import EditProductContainer from '../components/products/edit_product_container';
import CreateVendorContainer from '../components/vendors/create_vendor_container';
import VendorShowContainer from '../components/vendors/vendor_show_container';
import ShoppingCartContainer from '../components/shopping_cart/shopping_cart_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Modal />
        <header className="logo_greeting">
            <div className="header-top-bar">
                <Link to="/" className="header-logo-link">Ecletsy</Link>
                <TopNavBarContainer />
            </div>
            <div className="header-bottom-bar">
                <BottomNavBar />  
            </div>
        </header>
        <Switch>
            <Route exact path="/" component={HomePageContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/products/:id" component={ProductShowContainer} />
            <ProtectedRoute exact path="/vendors/:vendor_id/products" component={CreateProductContainer} />
            <ProtectedRoute exact path="/vendors/:vendor_id/products/:id" component={EditProductContainer} />
            <ProtectedRoute exact path="/shopping_cart" component={ShoppingCartContainer} />
            <ProtectedRoute exact path="/vendors" component={CreateVendorContainer} />
            <Route exact path="/vendors/:id" component={VendorShowContainer} />
            <Route component={NoMatchPage} />
        </Switch>
    </div>
);

export default App;

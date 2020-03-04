import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {

    console.log("currentuser at entry", window.currentUser);
    
    let store;
    if (window.currentUser){
        const preloadedState = { session: { currentUser: window.currentUser } };
        store = configureStore(preloadedState);        
    } else {
        store = configureStore();
    }

    const rootElement = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, rootElement);

});
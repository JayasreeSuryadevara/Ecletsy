import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {

    console.log("currentuser at entry", window.currentUser);
    
    let store;

    if (window.currentUser){
        const preloadedState = { 
            entities: { users: { [window.currentUser.id]: window.currentUser } } , 
            session: { id: window.currentUser.id } 
        };
        store = configureStore(preloadedState);        
    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    
    const rootElement = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, rootElement);

});
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

console.log("indside entry file");

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const rootElement = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, rootElement);

});
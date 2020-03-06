import React from 'react';

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

const receiveAllProducts = products => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
});

const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
});

const removeProduct = productId => ({
    type: REMOVE_PRODUCT
});



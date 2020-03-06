import * as ProductApiUtil from '../util/products_api_util';

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
    type: REMOVE_PRODUCT,
    productId
});

const receiveProductErrors = errors => ({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
});

export const fetchProducts = () => dispatch => (
    ProductApiUtil.fetchProducts().then(products => (
        dispatch(receiveAllProducts(products))
    ))  
);

export const fetchProduct = productId => dispatch => (
    ProductApiUtil.fetchProduct(productId).then(product => (
        dispatch(receiveProduct(product))
    ))
);

export const deleteProduct = productId => dispatch => (
    ProductApiUtil.deleteProduct(productId).then(() => (
        dispatch(removeProduct(productId))
    ))
);

export const updateProduct = product => dispatch => (
    ProductApiUtil.updateProduct(product).then(product => (
        dispatch(receiveProduct(product))
    ))
);

export const createProduct = product => dispatch => (
    ProductApiUtil.createProduct(product).then(product => (
        dispatch(receiveProduct(product))
    ), err => (
        dispatch(receiveProductErrors(err.responseJSON))
    ))
);


import React from 'react';
import { Link } from 'react-router-dom';

const VendorProductIndex  = ({ products }) => {
    
    const productList = Object.values(products).map(product => (
        <li className='product-index-item' key={`product-${product.id}`}>
            <Link to={`/products/${product.id}`}>
                <div className='product-index-image'>
                    <img src={product.image_url} />
                </div>
                <div className="product-index-item-info">
                    <div className="product-index-price">${product.price.toFixed(2)}</div>
                    <div className="free-shipping-bar">FREE Shipping</div>
                </div>
            </Link>
        </li>
    ));

    return (
        <div className="vendor-product-index-container">
            <ul className="product-index-ul">
                {productList}
            </ul>
        </div>
    );
};

export default VendorProductIndex;
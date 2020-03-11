import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

class VendorProductIndex extends React.Component {

    render() {
        const products = Object.values(this.props.products);
        const productList = products.map(product => {
            return (
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
            );
        });

        return (
            <div className="product-index-container">
                <ul className="product-index-ul">
                    {productList}
                </ul>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    const products = state.entities.vendors[state.vendor_id]
    return(products);
}


const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(VendorProductIndex);
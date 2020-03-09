import React from 'react';
import { Link } from 'react-router-dom';

class ProductIndex extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const products = Object.values(this.props.products);
        console.log("props in product-index", products);
        const productList = products.map(product => {
            return(
                <li className='product-index-item' key={`product-${product.id}`}>
                    <Link to={`/products/${product.id}`}>
                        <div className='product-index-image'>
                            <img src={product.image_url} />
                        </div>
                        <div className='product-index-name'>
                            <h1>{product.product_name}</h1>
                        </div>
                        <h3>${product.price}</h3>
                    </Link>
                </li>
            );
        });
    
        return(
            <div className="product-index-container">
                <ul className="product-index-ul">
                    { productList }
                </ul>
            </div>
        );
    }
};

export default ProductIndex;
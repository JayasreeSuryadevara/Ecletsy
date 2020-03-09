import React from 'react';

class ProductIndex extends React.Component {

    componentDidMount(){
        this.props.fetchProducts();
    }

    render(){
        const products = this.props.products.map(product => {
            return(
                <li className='product-index-item'>
                    <Link to={`/products/${product.id}`}>
                        <div className='product-index-image'>
                            <img src={product.photo} />
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
                    { products }
                </ul>
            </div>
        );
    }
};

export default ProductIndex;
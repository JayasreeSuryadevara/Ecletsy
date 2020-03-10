import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productId: this.props.match.params.id
        };
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        this.props.fetchProduct(this.state.productId);
        // this.props.fetchVendor(this.props.match.params.vendorId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.fetchProduct(this.props.match.params.id);
            // this.props.fetchVendor(this.props.match.params.vendorId);
        }
    }

    handleEdit(e) {
        e.preventDefault();
        this.props.history.push(`/products/${this.props.product.productId}/edit`);
    }

    render() {
        let { product } = this.props;
        console.log(product);
        return (
            <div className="product-show">
                <div className="product-show-img">
                    <img src={product.image_url} />     
                </div>
                <div className="product-show-info">
                    {/* <div> */}
                        {/* <Link to={`/vendors/${vendor.id}`}>{vendor.vendor_name}</Link> */}
                    {/* </div> */}
                    <div className="product-show-name">
                        <label> Name </label>
                        <br />
                        {product.product_name}
                    </div>
                    <div className="product-show-price">
                        <label> Price </label>
                        <br />
                        <strong>${product.price.toFixed(2)}</strong>
                    </div>
                    <div className="product-show-desc">
                        <label>Description </label>
                        <br />
                        {product.desc}
                    </div>
                    <div className="product-show-vendor-info">
                        <div className="product-show-vendor-info-box">
                            {/* <p>Try other products from {vendor.vendor_name}</p> */}
                            {/* <button>to vendor page</button> */}
                        </div>
                    </div>
                    {/* <div "product-show-buttons">
                            <button className="product-show-cart-btn" onClick={this.props.addCartItem}>
                                Add to Cart
                            </button>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default ProductShow;
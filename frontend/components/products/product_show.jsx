import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {

    constructor(props) {
        super(props);
        this.renderRating = this.renderRating.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.userProfile = this.userProfile.bind(this);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id)
        .then(result => {
            const product = result.product;
            this.props.fetchVendor(product.vendor_id);
        });
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.product.id != this.props.match.params.id) {
    //         this.props.fetchProduct(this.props.match.params.id)
    //     }

    //     if (this.props.product.vendor_id != this.props.vendor.id) {
    //         this.props.fetchVendor(this.props.product.vendor.id)
    //     }
    // }
    // get user profile to map cart to user
    userProfile() {

    }
    // render rating as 5 * 
    renderRating() {

    }
    // functionality to add an item to cart
    addToCart() {

    }

    render() {
        let { product } = this.props;
        if (!product) {
            return <div>Loading...</div>;
        }
        console.log("props in product show", this.props);
        // const vendor = this.props.entities.vendors[product.vendor_id];
        return (
            <div className="product-show">
                <div className="product-show-img">
                    <img src={product.image_url} />     
                </div>
                <div className="product-show-info">
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
                            <p>Try other products from </p>
                            <Link to={`/vendors/${product.vendor_id}`}>{product.vendor_id}</Link> 
                            {/* <Link to={`/vendors/${product.vendor_id}`}>{vendor.vendor_name}</Link>  */}
                        </div>
                    </div>
                    {/* <div "product-show-addCart-btn">
                            <button className="product-show-cart-btn" onClick={this.props.addToCart}>
                                Add to Cart
                            </button>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default ProductShow;
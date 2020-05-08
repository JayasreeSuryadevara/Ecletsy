import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../cart_item/cart_item';

class ProductShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
        this.renderRating = this.renderRating.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.userProfile = this.userProfile.bind(this);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id)
        .then(result => {
            const product = result.product;
            this.props.fetchVendor(product.vendor_id);
            this.setState({loaded: true})
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
        let { product,vendor } = this.props;
        if (!product) {
            return <div>Loading...</div>;
        }
        return (
            <div className="product-show">
                <div className="product-show-img">
                    <img src={product.image_url} /> 
                    <br />
                    <div className="product-show-vendor-info">
                        {this.state.loaded ?
                            <div className="product-show-vendor-info-box">
                                <p>Try other products from </p>
                                <div className="product-show-vendor-link">
                                    <Link to={`/vendors/${product.vendor_id}`}>{vendor.vendor_name}</Link>
                                </div>
                            </div> :
                            null
                        }
                    </div>
                    <br />
                    <div>
                        <Link to="/" className="return-to-home"> Return to Home Page </Link>
                    </div>    
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
                    <br />
                        {this.props.currentUser ? <CartItem product={product} /> : null} 
                    <br />
                </div>
            </div>
        )
    }
}

export default ProductShow;
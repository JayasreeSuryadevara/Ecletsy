import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_id: this.props.match.params.productId
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
        this.props.fetchVendor(this.props.match.params.vendorId);
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.productId !== prevProps.match.params.productId) {
            this.props.fetchProduct(this.props.match.params.productId);
            this.props.fetchVendor(this.props.match.params.vendorId);
        }
    }

    handleEdit(e) {
        e.preventDefault();
        this.props.history.push(`/products/${this.props.product.id}/edit`);
    }

    render() {
        let { product, vendor} = this.props;

        return (
            <div className="product-show">
                {/* add image */}
                <div className="product-info">
                    <ul>
                        <li>
                            <Link to={`/vendors/${vendor.id}`}>{vendor.vendor_name}</Link>
                        </li>
                        <li className="product-show-name">{product.product_name}</li>
                        <li className="product-show-price">
                            <strong>${product.price}</strong>
                        </li>
                    </ul>
                    <div className="product-desc">
                        <label>Description</label>
                        {product.desc}
                    </div>
                    <div className="product-show-vendor-info">
                        <div className="product-show-vendor-info-wrapper clickable">
                            <p>Try other products from {vendor.vendor_name}</p>
                            {/* <button>to vendor page</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ProductShow);
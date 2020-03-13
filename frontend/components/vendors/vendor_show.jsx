import React from 'react';
import { getCurrentUserId } from '../../util/helpers_util';
import { Link } from 'react-router-dom';
import VendorProductsContainer from './vendor_products';
import CreateProductContainer from '../products/create_product_container';

class VendorShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            vendor_products: [],
            vendor_owner: false,
            loaded: false
        }
        // this.handleAddProduct = this.handleAddProduct.bind(this);
    }

    componentDidMount() {
        this.props.fetchVendor(this.props.match.params.id)
            .then(payload => {
                const { vendor} = payload;
                const currentUserId = getCurrentUserId(this.props.currentUser);
                vendor.owner_id === currentUserId ? 
                    this.setState({vendor_owner: true}) : 
                    null
            });
    }

    // handleAddProduct(e) {
    //     this.state.vendor_owner ? <CreateProductContainer vendorId={vendor.id} /> : null }
    // }
                
    render() {
        let { vendor, currentUser } = this.props;
        if (!vendor) {
            return <div>Loading...</div>;
        }
        console.log("vendor-show",vendor);
        return (
            <div className="vendor-show-main">
                <div className="vendor-show">
                    <div className="vendor-show-img">
                        <img src={vendor.image_url} />
                    </div>
                    <div className="vendor-show-info">
                        <h3> Name </h3>
                        <br />
                        <h3>{vendor.vendor_name}</h3>
                        <br />
                        <h3> Owner </h3>
                        <br />
                        <h3>{vendor.ownerName}</h3>
                        <br />                    
                        <h3> Email </h3>
                        <br />
                        <h3> {vendor.ownerEmail } </h3>
                        <br />
                        <div className="vendor-show-btns">
                            <span>
                                <Link to={`/vendors/${vendor.id}/products`} className="add-product-link" >Add a Product </Link>
                            </span>
                            <span>
                                <Link to="/" className="return-to-home"> Return to Home Page </Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <VendorProductsContainer 
                        products={Object.assign({},vendor.products)} 
                        vendor_id={vendor.id} 
                    /> 
                </div>
            </div>
        )
    }
}

export default VendorShow;
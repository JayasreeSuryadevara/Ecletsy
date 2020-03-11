import React from 'react';
import ProductIndexcontainer from '../products/product_index_container';
import CreateProductContainer from '../products/create_product_container';

class VendorShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            vendor_products: [],
            loaded: false
        }
        this.fetchVendorsProducts = this.fetchVendorsProducts.bind(this);
    }

    componentDidMount() {
        this.props.fetchVendor(this.props.match.params.id);
        // this.props.fetchAllUsers();
        // this.fetchVendorsProducts(this.props.match.params.id);
    }

    fetchVendorsProducts(vendorId) {
        const { products } = this.props.fetchProducts();
        console.log("products", products);
        // products.map(product => {
        //     if (product.vendor_id === vendorId){
        //         this.state.vendor_products.push(product);
        //         loaded = true;
        //     }
        // });
        // this.setState({[vendor_products]: vendor_products})
    }

    render() {
        let { vendor, currentUser } = this.props;
        if (!vendor) {
            return <div>Loading...</div>;
        }
        console.log("vendor show", this.props);
        console.log("vendor-show",vendor);
        return (
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
                </div>
                <div>
                    {/* { ( vendor.owner_id === currentUser.id ) ?  <CreateProductContainer /> : null } */}
                    {/* { loaded ? <ProductIndexcontainer products={this.state.vendor_products} /> : null } */}
                    <ProductIndexcontainer products={Object.assign({},vendor.products)} /> 
                </div>
            </div>
        )
    }
}

export default VendorShow;
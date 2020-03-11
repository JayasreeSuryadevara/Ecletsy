import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from "../../actions/product_actions";
import { fetchVendor } from '../../actions/vendor_actions';

const mapStateToProps = (state, ownProps) => {
    const productId = ownProps.match.params.id;
    const product = state.entities.products[productId];
    let vendor;
    if (product){
        vendor = product.vendor;
    } else {
        vendor = { vendor_name: "" }
    }
    console.log("vendor in ps-c", vendor);
    return {
        product,
        vendor
    };
}

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    fetchVendor: (vendorId) => dispatch(fetchVendor(vendorId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
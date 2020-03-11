import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from "../../actions/product_actions";
import { fetchVendor } from '../../actions/vendor_actions';

const mapStateToProps = (state, ownProps) => {
    const productId = ownProps.match.params.id;
    const product = state.entities.products[productId];
    const currentUser = state.session.currentUser;
    let vendor;
    if (product){
        vendor = state.entities.users[product.vendor_id]
    } else {
        vendor = { vendor_name: "" }
    }

    return {
        currentUser,
        product,
        vendor
    };
}

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    fetchVendor: (vendorId) => dispatch(fetchVendor(vendorId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
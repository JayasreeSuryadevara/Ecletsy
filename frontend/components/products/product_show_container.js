import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from "../../actions/product_actions";
import { fetchVendor } from '../../actions/vendor_actions';

const mapStateToProps = (state, ownProps) => {
    const productId = ownProps.match.params.id;
    const product = state.entities.products[productId];
    let currentUser;
    let vendor;
    if (state.session.id){
        currentUser = state.entities.users[state.session.id];
    } else {
        currentUser = "";
    }
    if (product){
        vendor = product.vendor;
    } else {
        vendor = { vendor_name: "" }
    }
    return {
        product,
        vendor,
        currentUser
    };
}

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    fetchVendor: (vendorId) => dispatch(fetchVendor(vendorId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from "../../actions/product_actions";
import { fetchVendor } from '../../actions/vendor_actions';

const mapStateToProps = (state, ownProps) => {
    const productId = ownProps.match.params.id;
    const product = state.entities.products[productId];
    console.log("product in product-show-container", product);
    // const vendorId = product.vendor_id;
    const currentUser = state.session.currentUser;

    return {
        product,
        // vendor
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    fetchVendor: (vendorId) => dispatch(fetchVendor(vendorId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
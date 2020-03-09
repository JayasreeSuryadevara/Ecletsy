import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from "../../actions/product_actions";
import { fetchVendor } from '../../actions/store_actions';

const mapStateToProps = (state, ownProps) => {
    const productId = ownProps.match.params.productId;
    const product = state.entities.products[productId];
    const vendor = state.entities.vendors[ownProps.match.params.vendorId];
    const currentUser = state.session.currentUser;

    return {
        product,
        vendor
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    fetchVendor: (vendorId) => dispatch(fetchVendor(vendorId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
import { connect } from 'react-redux';
import VendorShow from './vendor_show';
import { fetchProducts } from "../../actions/product_actions";
import { fetchVendor } from '../../actions/vendor_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    console.log("state in vsc", state);
    console.log("ownprops in VSC", ownProps);
    const currentUser = state.session.currentUser;
    const vendor = state.entities.vendors[ownProps.match.params.id];
    return {
        currentUser,
        vendor
    };
}

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchVendor: (vendorId) => dispatch(fetchVendor(vendorId)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(VendorShow);
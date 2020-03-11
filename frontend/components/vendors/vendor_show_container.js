import { connect } from 'react-redux';
import VendorShow from './vendor_show';
import { fetchProducts } from "../../actions/product_actions";
import { fetchVendor } from '../../actions/vendor_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    const vendor = state.entities.vendors[ownProps.match.params.id];
    console.log("currentUser in vendor show", currentUser);
    console.log("vendor in vendor show", vendor);
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
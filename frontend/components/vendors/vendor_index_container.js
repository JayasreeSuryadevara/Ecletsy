import { connect } from 'react-redux';
import { fetchVendors } from '../../actions/vendor_actions';
import VendorIndex from './vendor_index';

const mapStateToProps = ({ entities: { vendors } }) => ({
    vendors
});

const mapDispatchToProps = dispatch => ({
    fetchVendors: () => dispatch(fetchVendors())
});

export default connect(mapStateToProps, mapDispatchToProps)(VendorIndex);
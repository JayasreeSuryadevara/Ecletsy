import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VendorForm from './vendor_form';
import { createVendor } from '../../actions/vendor_actions';

const mapStateToProps = state => {
    const currentUser = state.entities.users[state.session.id]
    return {
        currentUser,
    };
}

const mapDispatchToProps = dispatch => ({
    createVendor: (vendor) => dispatch(createVendor(vendor))
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(VendorForm));
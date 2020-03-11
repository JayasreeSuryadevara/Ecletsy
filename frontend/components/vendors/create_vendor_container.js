import { connect } from 'react-redux';
import VendorForm from './vendor_form';

const mapStateToProps = state => {
    const currentUser = state.session.currentUser;
    return {
        currentUser
    };
}

const mapDispatchToProps = dispatch => ({

});

export default connect( mapStateToProps, mapDispatchToProps )(VendorForm);
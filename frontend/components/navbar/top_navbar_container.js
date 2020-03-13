import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getVendorId } from '../../util/helpers_util';
import Navbar from './top-navbar';

const mapStateToProps = ({ session, entities: { users } }) => {
    const currentUser = users[session.id];
    const vendorId = getVendorId(currentUser);
    return {
        currentUser,
        vendorId
    }
};

export default withRouter(connect(mapStateToProps, null)(Navbar));
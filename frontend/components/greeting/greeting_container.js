import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
    console.log("in greeting container", session);
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    enableModal: modal => dispatch(enableModal(modal))
});

export default connect( mapStateToProps, mapDispatchToProps )(Greeting);
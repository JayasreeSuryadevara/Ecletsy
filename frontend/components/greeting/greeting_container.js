import { connect } from 'react-redux';
import { enableModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    enableModal: modal => dispatch(enableModal(modal))
});

export default connect( mapStateToProps, mapDispatchToProps )(Greeting);
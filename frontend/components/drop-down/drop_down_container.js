import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import DropDown from './drop_down';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});
export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
import NavBar from './navbar';
import { connect } from 'react-redux';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
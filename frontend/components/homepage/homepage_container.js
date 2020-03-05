import { connect } from 'react-redux';
import HomePage from './homepage';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({

});

export default connect( mapStateToProps, mapDispatchToProps )(HomePage);
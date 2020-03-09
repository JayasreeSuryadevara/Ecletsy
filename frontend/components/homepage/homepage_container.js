import { connect } from 'react-redux';
import HomePage from './homepage';
import { fetchProducts } from '../../actions/product_actions';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
});

export default connect( mapStateToProps, mapDispatchToProps )(HomePage);
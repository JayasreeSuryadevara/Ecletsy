import { connect } from 'react-redux';
import HomePage from './homepage';
import { fetchProducts } from '../../actions/product_actions';
import { fetchVendors } from '../../actions/vendor_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const mapStateToProps = ({ session, entities: { users, products } }) => ({
    currentUser: users[session.id],
    products,
    vendors: session.vendors
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchVendors: () => dispatch(fetchVendors()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect( mapStateToProps, mapDispatchToProps )(HomePage);
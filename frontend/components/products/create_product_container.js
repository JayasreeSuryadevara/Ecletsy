import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProduct } from '../../actions/product_actions';
import ProductForm from './product_form';

const mapStateToProps = ({ session, entities: { users, vendors } }) => {
    const currentUser = users[session.id];
    const vendorId = currentUser.vendorId;
    const product = {
            product_name: "",
            desc: "",
            price: "",
            vendor_id: vendorId
        }
    return {
        // errors: state.errors.product,
        formType: 'create',
        formTitle: 'Add a new Product',
        buttonType: 'Create Product',
        product
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: product => dispatch(createProduct(product))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductForm));

import { connect } from 'react-redux';
import { updateProduct } from '../../actions/product_actions';
import ProductForm from './product_form';

const mapStateToProps = (state, ownProps) => {
    const productId = ownProps.match.params.id;
    const product = state.entities.products[productId];
    return {
        errors: state.errors.product,
        formType: 'update',
        formTitle: 'Edit details of the Product',
        buttonType: 'Edit Product',
        product
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: product = dispatch(updateProduct(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
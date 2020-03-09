import { connect } from 'react-redux';
import { createProduct } from '../../actions/product_actions';
import ProductForm from './product_form';

const mapStateToProps = (state, ownProps) => {
    const vendorId = ownProps.match.params.productId;
    const product = {
            product_name: "",
            desc: "",
            price: "",
            vendor_id: vendorId
        }
    return {
        errors: state.errors.product,
        formType: 'create',
        formTitle: 'Add a new Product',
        buttonType: 'Create Product',
        product
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: product = dispatch(createProduct(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);

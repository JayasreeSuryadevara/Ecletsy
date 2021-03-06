import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { enableModal, disableModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        formTitle: 'Create your account',
        buttonType: 'Register',
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: (user) => dispatch(signup(user)),
        enableModal: (mode) => dispatch(enableModal(mode)),
        disableModal: () => dispatch(disableModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

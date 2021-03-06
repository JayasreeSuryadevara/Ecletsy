import React from 'react';
import { connect } from 'react-redux';
import { disableModal } from '../../actions/modal_actions';
import SignUpFormContainer from '../session/signup_form_container';
import LogInFormContainer from '../session/login_form_container';

function Modal({ modal, disableModal }) {
    if (!modal) { return null }
    let component;
    switch (modal) {
        case 'login':
            component = <LogInFormContainer />;
            break;
        case 'signup':
            component = <SignUpFormContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={disableModal}>
            <div className="modal-child" onClick={(e) => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    modal: state.ui.modal 
}); 


const mapDispatchToProps = dispatch => ({
    disableModal: () => dispatch(disableModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
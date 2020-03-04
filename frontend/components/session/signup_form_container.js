import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { enableModal, disableModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formTitle: "Create your Account",
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signupUser: (user) => dispatch(signup(user)),
        enableModal: (<button onClick={() => dispatch(enableModal("login"))}>Sign Up</button>),
        disableModal: () => dispatch(disableModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);

import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { enableModal, disableModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formTitle: "Sign in to continue",
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (user) => dispatch(login(user)),
        enableModal: (<button onClick={() => dispatch(enableModal("login"))}>Sign In</button>),
        disableModal: () => dispatch(disableModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

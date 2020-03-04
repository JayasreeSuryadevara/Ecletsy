import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { enableModal, disableModal } from "../../actions/modal_actions";

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: "signup",
        formTitle: "Sign Up",
        buttonType: "Register",
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: (user) => dispatch(signup(user)),
        enableModal: (<button onClick={() => dispatch(enableModal("login"))}>Sign in</button>),
        disableModal: () => dispatch(disableModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

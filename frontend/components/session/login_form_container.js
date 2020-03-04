import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { enableModal, disableModal } from "../../actions/modal_actions";

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: "login",
        formTitle: "Sign in",
        buttonType: "Sign in",
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: (user) => dispatch(login(user)),
        enableModal: (mode) => dispatch(enableModal(mode)),
        disableModal: () => dispatch(disableModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

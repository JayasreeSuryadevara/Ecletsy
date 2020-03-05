import React from 'react';
import { DEMO_USER } from '../../util/demo_user_util';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.demoUserOrCloseButton = this.demoUserOrCloseButton.bind(this);
        this.inputEmailnAddress = this.inputEmailnAddress.bind(this);
        this.registerForSignInForm = this.registerForSignInForm.bind(this);

    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user).then(() => this.props.disableModal());
    }

    handleDemo(e) {
        e.preventDefault();
        this.props.action(DEMO_USER).then(() => {
            this.props.disableModal()
        });
    }

    demoUserOrCloseButton() {
        if (this.props.formType === "login") {
            return (
                <button className="session-other-button" onClick={this.handleDemo}> Demo User </button>
            );
        } else {
            return (
                <button className="session-other-button" onClick={this.props.disableModal}> Close </button>
            );
        }
    }

    inputEmailnAddress() {
        if (this.props.formType === "login") return null;
        return (
            <div>
                <label>Email</label>
                <br />
                <input required type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="session-form-input"
                />
                <br />
                <label>Address</label>
                <br />
                <input required type="text"
                    value={this.state.address}
                    onChange={this.update('address')}
                    className="session-form-input"
                />
            </div>
        );
    }

    registerForSignInForm() {
        if ( this.props.formType === 'login' ) {
            return (
                <button className="register-button" onClick={() => this.props.enableModal('signup')}>
                    Register
                </button>
            );
        }

    }

    renderErrors() {
        const { errors } = this.props;
        if (errors) {
            const errors = this.props.errors.map((error, idx) => {
                return (<li key={`error-${idx}`}>{error}</li>)
            });
        }
        return (<ul> {errors} </ul>);
    }

    render() {
        return (
            <div className="session-form-container">
                <form className="session-form-box" onSubmit={ this.handleSubmit }>
                    <div className="form-title-button">
                        <h2 className="form-title"> {this.props.formTitle} </h2>
                        {this.registerForSignInForm() }
                    </div>
                    <br />
                    { this.renderErrors() }
                    <br />
                    <div className="session-form">
                        <br />
                        <label>Username</label>
                        <br />
                        <input required type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="session-form-input"
                        />
                        <br />
                        <label>Password</label>
                        <br />
                        <input required type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="session-form-input"
                        />
                        <br />
                        { this.inputEmailnAddress() }
                        <br />
                        <div className="login_button_container">
                            <input type="submit"
                                value={this.props.buttonType}
                                className="login_button_submit" />
                            <span className="session_other_button">
                                {this.demoUserOrCloseButton()}
                            </span>
                        </div>
                    </div>
                    <div className="session-terms-and-conditions">
                        <p>
                            By clicking Sign in or Continue with Google, Facebook, or Apple, you agree to Etsy's Terms of Use and Privacy Policy. Etsy may send you communications; you may change your preferences in your account settings. We'll never post without your permission.
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;

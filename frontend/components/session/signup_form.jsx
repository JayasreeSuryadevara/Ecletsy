import React from 'react';
import { DEMO_USER } from '../../util/demo_user_util';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', email: '', address: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.demoUserButton = this.demoUserButton.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signupUser(user)
            .then(() => this.props.disableModal());
    }

    handleDemo(e) {
        e.preventDefault();
        this.props.signupUser(DEMO_USER)
            .then(() => this.props.disableModal());
    }

    demoUserButton() {
        return (
            <button className="demo_user_login" onClick={this.handleDemo}> Demo User </button>
        )
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
            <div className="signup-form-container">
                <form className="signup-form-box">
                    Welcome to Ecletsy!
                    <br />
                    { this.renderErrors() }
                    <br />
                    <div className="signup-form">
                        <br />
                        <label>Username </label>
                        <br/>
                        <input required type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="signup-input"
                        />
                        <br />
                        <label>Password</label>
                        <br/>
                        <input required type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="signup-input"
                        />
                        <br />
                        <label>Email</label>
                        <br/>
                        <input required type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="signup-input"
                        />
                        <br />
                        <label>Address</label>
                        <br/>
                        <input required type="text"
                            value={this.state.address}
                            onChange={this.update('address')}
                            className="signup-input"
                        />
                        <br />
                        <div className="login_button_container">
                            <input type="submit"
                                value="Sign Up"
                                className="login_button_submit" />
                            {this.demoUserButton()}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;

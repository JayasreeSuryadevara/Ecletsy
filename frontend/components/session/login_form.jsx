import React from 'react';
import { DEMO_USER } from '../../util/demo_user_util';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '',password: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors  = this.renderErrors.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.demoUserButton = this.demoUserButton.bind(this);

    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.loginUser(user)
            .then(() => this.props.disableModal());
    }

    renderErrors() {
        const { errors } = this.props;
        if (errors) {
            const errors = this.props.errors.map( (error, idx) => {
                return (<li key={`error-${idx}`}>{error}</li>)
            });
        }
        return ( <ul> { errors } </ul>);
    }

    handleDemo(e) {
        e.preventDefault();
        this.props.loginUser(DEMO_USER)
            .then(() => this.props.disableModal());
    }

    demoUserButton() {
        return (
            <button className="demo_user_login" onClick={this.handleDemo}> Demo User </button>
        )
    }

    render() {
        return (
            <div className="login-form-container">
                <form className="login-form-box" onSubmit={this.handleSubmit}>
                    <h1 className="form-title"> { this.props.formTitle } </h1>
                    <br />
                    { this.renderErrors() }
                    <br />
                    <div className="login-form">
                        <br />
                        <label>Username</label>
                        <br />
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="login-input"
                        />
                        <br />
                        <label>Password</label>
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                        />
                        <br />
                        <div className="login_button_container">
                            <input type="submit"
                                value="Log In"
                                className="login_button_submit" />
                            {this.demoUserButton()}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;

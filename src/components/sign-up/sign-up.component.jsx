import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: "", 
            email: "", 
            password: "", 
            confirmedPassword: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmedPassword } = this.state;
        const { signUpStart } = this.props;

        if (password !== confirmedPassword) {
            alert("Passwords don't match");
            return;
        }
        console.log(email)
        signUpStart({email, password, displayName});
    }

    handlechange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmedPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with an email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        label="name"
                        value= { displayName }
                        onChange={ this.handlechange }
                        required
                    />
                    <FormInput
                        type="text"
                        name="email"
                        label="email"
                        value= { email }
                        onChange={ this.handlechange }
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="password"
                        value= { password }
                        onChange={ this.handlechange }
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmedPassword"
                        label="confirm password"
                        value= { confirmedPassword }
                        onChange={ this.handlechange }
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
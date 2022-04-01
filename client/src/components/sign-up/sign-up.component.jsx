import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: "", 
        email: "", 
        password: "", 
        confirmedPassword: ""
    })
    const { displayName, email, password, confirmedPassword } = userCredentials;
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmedPassword) {
            alert("Passwords don't match");
            return;
        }

        signUpStart({email, password, displayName});
    }

    const handlechange = (event) => {
        const { name, value } = event.target;

        setUserCredentials({...userCredentials, [name]: value })
    }

    return (
        <div className="sign-up">
            <h2 className="title">I don't have an account</h2>
            <span>Sign up with an email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    label="name"
                    value= { displayName }
                    onChange={ handlechange }
                    required
                />
                <FormInput
                    type="text"
                    name="email"
                    label="email"
                    value= { email }
                    onChange={ handlechange }
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    label="password"
                    value= { password }
                    onChange={ handlechange }
                    required
                />
                <FormInput
                    type="password"
                    name="confirmedPassword"
                    label="confirm password"
                    value= { confirmedPassword }
                    onChange={ handlechange }
                    required
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
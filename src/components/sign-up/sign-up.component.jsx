import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
    constructor() {
        super()

        this.state() = {
            name: "", 
            email: "", 
            password: "", 
            confirmedPassword: ""
        }
    }

    render() {
        const { name, email, password, confirmedPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with an email and password</span>

                <FormInput
                    type="text"
                    name="name"
                    value= { name }
                    onChange={ handlechange }
                    required
                />
                <FormInput
                    type="text"
                    name="email"
                    value= { email }
                    onChange={ handlechange }
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value= { password }
                    onChange={ handlechange }
                    required
                />
                <FormInput
                    type="password"
                    name="confirmedPassorwd"
                    value= { confirmedPassword }
                    onChange={ handlechange }
                    required
                />

                <CustomButton type="submit">SIGN UP</CustomButton>
            </div>
        )
    }
}

export default SignUp;
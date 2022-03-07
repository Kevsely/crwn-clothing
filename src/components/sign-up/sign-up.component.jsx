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

    handleSubmit = (event) => {
        event.preventDefault();

        const { name, email, password, confirmedPassword } = this.state;

        if (password !== confirmedPassword) return;

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user);

            this.setState({
                name: "", 
                email: "", 
                password: "", 
                confirmedPassword: ""
            })
        } catch (error) {
            console.log(error)
        }
    }

    handlechange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const { name, email, password, confirmedPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with an email and password</span>

                <Form onSubmit={handleSubmit}>
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
                </Form>

            </div>
        )
    }
}

export default SignUp;
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"

import './App.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            createUserProfileDocument(user);
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {return (
        <div>
            <Header currentUser={this.state.currentUser}/>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='/shop' element={<ShopPage />} />
                <Route path='/signin' element={<SignInAndSignUpPage />} />
            </Routes>
        </div>
    )}
}

export default App;

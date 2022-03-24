import './App.css';

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

class App extends React.Component {
    componentDidMount () {
        const { checkUserSession } = this.props;

        checkUserSession();
    }

    render() {return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/shop/*' element={<ShopPage /> } />
                <Route path="/signin" element={ (this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />)}/>
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
        </div>
    )}
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

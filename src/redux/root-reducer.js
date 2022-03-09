import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import toggleCartHidden from "./cart/cart.actions";

export default combineReducers({
    user: userReducer, 
    cart: toggleCartHidden
})
import { combineReducers } from "redux";
import jeanReducer from "./jeanReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    products: jeanReducer,
    cart: cartReducer
})

export default rootReducer;
import { combineReducers } from "redux";
import jeanReducer from "./jeanReducer";

const rootReducer = combineReducers({
    products: jeanReducer
})

export default rootReducer;
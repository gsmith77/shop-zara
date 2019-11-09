import { combineReducers } from "redux";
import jeanReducer from "./jeanReducer";

const rootReducer = combineReducers({
    jeans: jeanReducer
})

export default rootReducer;
import {combineReducers} from "redux";
// import { alertCloseBtn } from "../actionCreaters";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    add : amountReducer,
})

export default reducers;
import { combineReducers, legacy_createStore , applyMiddleware} from "@reduxjs/toolkit";
import authReducer from "./Auth/Reducer";
import {thunk} from "redux-thunk";

// const {combineReducers , legacy_createStore , applyMiddleware} = require("redux");

const rootReducer = combineReducers({
    auth : authReducer
});

export default store = legacy_createStore(rootReducer , applyMiddleware(thunk));
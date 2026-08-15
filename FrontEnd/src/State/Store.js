import { combineReducers, legacy_createStore , applyMiddleware} from "@reduxjs/toolkit";
import authReducer from "./Auth/Reducer";
import {thunk} from "redux-thunk";
import coinReducer from "./Coin/Reducer";
import walletReducer from "./Wallet/Reducer";

// const {combineReducers , legacy_createStore , applyMiddleware} = require("redux");

const rootReducer = combineReducers({
    auth : authReducer ,
    coin : coinReducer,
    wallet : walletReducer
});

export default store = legacy_createStore(rootReducer , applyMiddleware(thunk));
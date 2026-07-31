import { combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/Reducer";

const rootReducer = combineReducers({
    auth : authReducer
});

export default store = legacy_createStore(rootReducer , applyMiddleware(thunk));
import { CaseLower } from "lucide-react";
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FALIURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FALIURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionsTypes";

const initialState = {
    user: null,
    loading: false,
    error: null,
    jwt:null
}

const authReducer = (state = initialState, action) => {
    switch(action){
        case REGISTER_REQUEST :
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:    
            return{...state , loading: true , error :null} 

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return{...state , loading: false , error :null , jwt:action.playload} 

        case GET_USER_SUCCESS:
             return{...state , user: action.playload , error :null , loading:false}; 


        

        case REGISTER_FALIURE :
        case LOGIN_FALIURE:
        case GET_USER_FAILURE:
            return{...state , loading: FALSE , error :action.playload} 

        case LOGOUT : {
            return initialState
        }

        default:
            return state;
    }
}

export default authReducer;
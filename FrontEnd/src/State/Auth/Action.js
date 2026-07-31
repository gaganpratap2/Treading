import axios from "axios"
import { GET_USER_FAILURE, GET_USER_REQUEST, LOGIN_FALIURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FALIURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionsTypes";
import { type } from "node:os";

export const register = (userData) => async(dispatch)=> {
    dispatch({type:REGISTER_REQUEST});

    const baseUrl = "";
    try {
        const res = await axios.post(`${baseUrl}/auth/signup` , userData);
        const user = res.data;
        console.log(user);

        dispatch({type:REGISTER_SUCCESS , playload:user.jwt});
        localStorage.setItem("jwt" , user.jwt)

    } catch (error) {
        dispatch({type:REGISTER_FALIURE , playload: error.message})
        console.log(error);
    }
}


export const login = (userData) => async(dispatch)=> {
    dispatch({type:LOGIN_REQUEST});

    const baseUrl = "http://localhost:5454";
    try {
        const res = await axios.post(`${baseUrl}/auth/signin` , userData.e);
        const user = res.data;
        console.log(user);

        dispatch({type:LOGIN_SUCCESS , playload:user.jwt});
        localStorage.setItem("jwt" , user.jwt)
        userData.navigate("/");

    } catch (error) {
        dispatch({type:LOGIN_FALIURE , playload: error.message})
        console.log(error);
    }
}

export const getUser = (jwt) => async(dispatch)=> {
    dispatch({type:GET_USER_REQUEST});

    const baseUrl = "";
    try {
        const res = await axios.get(`${baseUrl}/api/users/profile` , {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        const user = res.data;
        console.log(user);

        dispatch({type:GET_USER_FAILURE , playload:user.jwt});

    } catch (error) {
        dispatch({type:GET_USER_FAILURE , playload: error.message})
        console.log(error);
    }
}


export const logOut = () => (dispatch) => {
    localStorage.clear();   
    dispatch({type:LOGOUT});
}
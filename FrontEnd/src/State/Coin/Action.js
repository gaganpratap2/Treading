import { FETCH_COIN_LIST_FAILURE, FETCH_COIN_LIST_REQUEST, FETCH_COIN_LIST_SUCCESS } from "./ActionType";

export const getCoinList = (page) => async(dispatch)=> {
    dispatch({type:FETCH_COIN_LIST_REQUEST});

    const baseUrl = "";
    try {
        const res = await axios.GET(`${baseUrl}/COINS?PAGE=${page}`);
        console.log(res);

        dispatch({type:FETCH_COIN_LIST_SUCCESS , playload:data);
        // localStorage.setItem("coin list" , data)

    } catch (error) {
        dispatch({type:FETCH_COIN_LIST_FAILURE , playload: error.message})
        console.log(error);
    }
}
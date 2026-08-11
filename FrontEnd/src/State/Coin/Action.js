import { FETCH_COIN_LIST_FAILURE, FETCH_COIN_LIST_REQUEST, FETCH_COIN_LIST_SUCCESS, FETCH_MARKET_CHART_FAILURE, FETCH_MARKET_CHART_REQUEST, FETCH_MARKET_CHART_SUCCESS } from "./ActionType";
import axios from 'axios';
// add other action types here if needed (e.g. FETCH_TOP_50_COINS_*)

export const getCoinList = (page) => async(dispatch)=> {
    dispatch({type:FETCH_COIN_LIST_REQUEST});

    const baseUrl = "";
    try {
        const res = await axios.get(`${baseUrl}/COINS?PAGE=${page}`);
        console.log(res);

        dispatch({type:FETCH_COIN_LIST_SUCCESS, payload: res.data});
        // localStorage.setItem("coin list", JSON.stringify(res.data))

    } catch (error) {
        dispatch({type:FETCH_COIN_LIST_FAILURE, payload: error.message})
        console.log(error);
    }
}


export const getTop50Coins = () => async(dispatch)=> {
    // Ensure corresponding action types are defined/imported before using
    try{
        const res = await axios.get(`/coins/top50`);
        dispatch({type: 'FETCH_TOP_50_COINS_SUCCESS', payload:res.data});
        console.log("top 50 ", res.data);
    }catch(error){
        dispatch({type: 'FETCH_TOP_50_COINS_FAILURE', payload:error.message});
        console.log(error);
    }
};

export const fetchMarketChart = ({coinId, days, jwt}) => async(dispatch)=> {
    dispatch({type:FETCH_MARKET_CHART_REQUEST});
    try{
        const res = await axios.get(`/coins/${coinId}/chart?days=${days}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({type:FETCH_MARKET_CHART_SUCCESS, payload:res.data});
        console.log("market chart", res.data);
    }catch(error){
        dispatch({type:FETCH_MARKET_CHART_FAILURE, payload:error.message});
        console.log(error);
    }
};


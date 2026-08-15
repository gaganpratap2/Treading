import api, { API_BASE_URL } from "@/config/api";
import { FETCH_COIN_BY_ID_FAILURE, FETCH_COIN_BY_ID_REQUEST, FETCH_COIN_DETAILS_FAILURE, FETCH_COIN_DETAILS_REQUEST, FETCH_COIN_DETAILS_SUCCESS, FETCH_COIN_LIST_FAILURE, FETCH_COIN_LIST_REQUEST, FETCH_COIN_LIST_SUCCESS, FETCH_MARKET_CHART_FAILURE, FETCH_MARKET_CHART_REQUEST, FETCH_MARKET_CHART_SUCCESS, SEARCH_COIN_FAILURE, SEARCH_COIN_REQUEST, SEARCH_COIN_SUCCESS } from "./ActionType";
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
        const res = await api.get(`/coins/${coinId}/chart?days=${days}`, {
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

export const fetchCoinById = (coinId) => async(dispatch)=> {
    dispatch({type:FETCH_COIN_BY_ID_REQUEST});
    try{
        const res = await api.get(`/coins/${API_BASE_URL}/coins/${coinId}`);
        dispatch({type:FETCH_COIN_LIST_SUCCESS, payload:res.data});
        console.log("coin by id", res.data);
    }catch(error){
        dispatch({type:FETCH_COIN_BY_ID_FAILURE, payload:error.message});
        console.log("error" , error);
    }
};


export const fetchCoinDetails = ({coinId, jwt}) => async(dispatch)=> {
    dispatch({type:FETCH_COIN_DETAILS_REQUEST});
    try{
        const res = await api.get(`/coins/details/${coinId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({type:FETCH_COIN_DETAILS_SUCCESS, payload:res.data});
        console.log("market chart", res.data);
    }catch(error){
        dispatch({type:FETCH_COIN_DETAILS_FAILURE, payload:error.message});
        console.log(error);
    }
};


export const searchCoin = (keyword) => async(dispatch)=> {
    dispatch({type:SEARCH_COIN_REQUEST});
    try{
        const res = await api.get(`/coins/Ssearch?q=${keyword}`);
        dispatch({type:SEARCH_COIN_SUCCESS, payload:res.data});
        console.log("search coin", res.data);
    }catch(error){
        dispatch({type:SEARCH_COIN_FAILURE, payload:error.message});
        console.log(error);
    }
};


import api from '@/config/api';
import * as types from './ActionType'


export const getAssetById =({assetId , jwt}) => async (dispatch) => {
    dispatch({type : types.GET_ASSET_REQUEST});

    try {
        const res = await api.get(`/api/asset/${assetId}`, {
            headers: {
                Authorization :`Bearer ${jwt}`,
            },

        });

        dispatch({
            type : types.GET_ASSET_SUCCESS,
            playload : res.data
        });
        console.log("get asset by id" ,res.data);
    } catch (error) {
       dispatch({
        type : types.GET_ASSET_FAILURE,
        error : error.message
       }) 
    }
}



export const getAssetDetails =({coinId , jwt}) => async (dispatch) => {
    dispatch({type : types.GET_ASSET_DETAILS_REQUEST});

    try {
        const res = await api.get(`/api/asset/coin/${coinId}/user`, {
            headers: {
                Authorization :`Bearer ${jwt}`,
            },

        });

        dispatch({
            type : types.GET_ASSET_DETAILS_SUCCESS,
            playload : res.data
        });
        console.log("get asset by id" ,res.data);
    } catch (error) {
       dispatch({
        type : types.GET_ASSET_DETAILS_FAILURE,
        error : error.message
       }) 
    }
};



export const getUserAsset =(jwt) => async (dispatch) => {
    dispatch({type : types.GET_USER_ASSETS_REQUEST});

    try {
        const res = await api.get(`/api/asset`, {
            headers: {
                Authorization :`Bearer ${jwt}`,
            },

        });

        dispatch({
            type : types.GET_USER_ASSETS_SUCCESS,
            playload : res.data
        });
        console.log("get user asset" ,res.data);
    } catch (error) {
        console.log("user asset----" , error.res?.data);
       dispatch({
        type : types.GET_USER_ASSETS_FAILURE,
        error : error.message
       }) 
    }
}
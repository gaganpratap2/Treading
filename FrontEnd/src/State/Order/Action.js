
import api from '@/config/api';
import * as types from './ActionType';


export const payOrder = ({jwt , orderData , amount}) => async (dispatch) => {
    dispatch({type : types.PAY_ORDER_REQUEST});

    try {
        const res = await api.post('/api/order/pay' , orderData , {
            headers: {
                Authorization : `Bearer${jwt}`
            },
        });

        dispatch({
            type : types.PAY_ORDER_SUCCESS ,
            playload : res.data,
            amount
        });
        console.log("order success" , res.data);
    } catch (error) {
        console.log("error",error);
        dispatch({
            type : types.PAY_ORDER_FAILURE,
            error: error.message,
        })
    }
}



export const getAllOrderForUser = ({jwt , orderType , assetSymbol }) => async (dispatch) => {
    dispatch({type : types.GET_ALL_ORDER_REQUEST});

    try {
        const res = await api.post('/api/orders' , {
            headers: {
                Authorization : `Bearer${jwt}`
            },
            params: {
                order_type : orderType,
                assetSymbol : assetSymbol
            }
        });

        dispatch({
            type : types.GET_ALL_ORDER_SUCCESS ,
            playload : res.data,
            // amount
        });
        console.log("order success" , res.data);
    } catch (error) {
        console.log("error",error);
        dispatch({
            type : types.GET_ALL_ORDER_FAILURE,
            error: error.message,
        })
    }
};
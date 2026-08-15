import * as types from "./ActionType"
import api from "@/config/api"

export const getUserWallet =( jwt ) => async(dispatch) => {
    dispatch({type : types.GET_USER_WALLET_REQUEST});

    try {
        const res = await api.get("/api/wallet", {
            headers : {
                Authorization : `Bearer ${jwt} `
            },
        });

        dispatch({
            type : types.GET_USER_WALLET_SUCCESS , playload : res.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type : types.GET_USER_WALLET_FAILURE,
            error : error.message ,
    });
        }
           
};


export const getWalletTransaction =( jwt ) => async(dispatch) => {
    dispatch({type : types.GET_WALLET_TRANSACTION_REQUEST});

    try {
        const res = await api.get("/api/transactions", {
            headers : {
                Authorization : `Bearer ${jwt} `
            },
        });

        dispatch({
            type : types.GET_WALLET_TRANSACTION_SUCCESS , playload : res.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type : types.GET_WALLET_TRANSACTION_FAILURE,
            error : error.message ,
    });
        }
           
};



export const depositeMoney =( {jwt,orderId, paymentId , navigate} ) => async(dispatch) => {
    dispatch({type : types.DEPOSIT_MONEY_REQUEST});

    console.log(orderId , paymentId);

    try {
        const res = await api.get(`/api/wallet/deposite`, null ,  {
          params: {
                order_id: orderId,
                payment_id : paymentId,
          },
            headers : {
                Authorization : `Bearer ${jwt} `
            }, 
        });

        dispatch({
            type : types.DEPOSIT_MONEY_SUCCESS , playload : res.data
        });

        navigate("/wallet");
        console.log(res.data);
    } catch (error) {
        console.log(error);
        dispatch({
            type : types.DEPOSIT_MONEY_FAILURE,
            error : error.message ,
    });
        }
           
};





export const paymentHandler =( {jwt , amount , paymentMeathod} ) => async(dispatch) => {
    dispatch({type : types.DEPOSIT_MONEY_REQUEST});

    try {
        const res = await api.post(`/api/payment/${paymentMeathod}/amount/${amount}` ,  null ,  {
            headers : {
                Authorization : `Bearer ${jwt} `
            }, 
        });

        window.location.href = res.data.payment_url;

        dispatch({
            type : types.DEPOSIT_MONEY_SUCCESS , playload : res.data
        });

        navigate("/wallet");
        console.log(res.data);
    } catch (error) {
        console.log(error);
        dispatch({
            type : types.DEPOSIT_MONEY_FAILURE,
            error : error.message ,
    });
        }
           
};


export const transferMoney =( {jwt , walletId , reqData} ) => async(dispatch) => {
    dispatch({type : types.TRANSFER_MONEY_REQUEST});

    try {
        const res = await api.get(`/api/wallet/${walletId}/transfer`, reqData ,  { 
            headers : {
                Authorization : `Bearer ${jwt} `
            }, 
        });

        dispatch({
            type : types.TRANSFER_MONEY_SUCCESS , playload : res.data
        });
        console.log("transfer money send",res.data);
    } catch (error) {
        console.log(error);
        dispatch({
            type : types.TRANSFER_MONEY_FAILURE,
            error : error.message ,
    });
        }
           
};


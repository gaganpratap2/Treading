import api from "../api"; // adjust path if needed
import * as ActionTypes from "./ActionType";

// ==================== WITHDRAWAL ====================

export const withdrawalRequest = ({ amount, jwt }) => async dispatch => {
  dispatch({ type: ActionTypes.WITHDRAWAL_REQUEST });

  try {
    const response = await api.post(
      `/api/withdrawal/${amount}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }
    );

    console.log("withdrawal ---- ", response.data);

    dispatch({
      type: ActionTypes.WITHDRAWAL_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.WITHDRAWAL_FAILURE,
      payload: error.message
    });
  }
};


// ==================== PROCEED WITHDRAWAL ====================

export const proceedWithdrawal =
  ({ id, accept, jwt }) =>
  async dispatch => {
    dispatch({
      type: ActionTypes.WITHDRAWAL_PROCEED_REQUEST
    });

    try {
      const response = await api.patch(
        `/api/admin/withdrawal/${id}/proceed/${accept}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );

      console.log("proceed withdrawal ---- ", response.data);

      dispatch({
        type: ActionTypes.WITHDRAWAL_PROCEED_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.WITHDRAWAL_PROCEED_FAILURE,
        payload: error.message
      });
    }
  };


// ==================== WITHDRAWAL HISTORY ====================

export const getWithdrawalHistory = jwt => async dispatch => {
  dispatch({
    type: ActionTypes.GET_WITHDRAWAL_HISTORY_REQUEST
  });

  try {
    const response = await api.get("/api/withdrawal", {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    });

    console.log("withdrawal history ---- ", response.data);

    dispatch({
      type: ActionTypes.GET_WITHDRAWAL_HISTORY_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.GET_WITHDRAWAL_HISTORY_FAILURE,
      payload: error.message
    });
  }
};


// ==================== ALL WITHDRAWAL REQUESTS ====================

export const getAllWithdrawalRequest = jwt => async dispatch => {
  dispatch({
    type: ActionTypes.GET_WITHDRAWAL_REQUEST_REQUEST
  });

  try {
    const response = await api.get("/api/admin/withdrawal", {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    });

    console.log("all withdrawal requests ---- ", response.data);

    dispatch({
      type: ActionTypes.GET_WITHDRAWAL_REQUEST_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.GET_WITHDRAWAL_REQUEST_FAILURE,
      payload: error.message
    });
  }
};


// ==================== ADD PAYMENT DETAILS ====================

export const addPaymentDetails =
  ({ paymentDetails, jwt }) =>
  async dispatch => {
    dispatch({
      type: ActionTypes.ADD_PAYMENT_DETAILS_REQUEST
    });

    try {
      const response = await api.post(
        "/api/payment-details",
        paymentDetails,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );

      console.log("payment details added ---- ", response.data);

      dispatch({
        type: ActionTypes.ADD_PAYMENT_DETAILS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.ADD_PAYMENT_DETAILS_FAILURE,
        payload: error.message
      });
    }
  };


// ==================== GET PAYMENT DETAILS ====================

export const getPaymentDetails = jwt => async dispatch => {
  dispatch({
    type: ActionTypes.GET_PAYMENT_DETAILS_REQUEST
  });

  try {
    const response = await api.get("/api/payment-details", {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    });

    console.log("payment details ---- ", response.data);

    dispatch({
      type: ActionTypes.GET_PAYMENT_DETAILS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.GET_PAYMENT_DETAILS_FAILURE,
      payload: error.message
    });
  }
};
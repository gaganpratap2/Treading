
import { stat } from 'node:fs';
import * as types from './ActionType';


const initialState = {
    order : null,
    order : [],
    loading: false,
    error: null
};



const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PAY_ORDER_REQUEST:
    case types.GET_ORDER_REQUEST:
    case types.GET_ALL_ORDER_REQUEST:
    
      return {
        ...state,
        loading: true,
        error: null,
      };

    case types.GET_ALL_ORDER_SUCCESS:
       return {
        ...state,
        order:action.playload,
        loading: true,
        error: null,
      };
    case types.PAY_ORDER_FAILURE:
    case types.GET_ORDER_FAILURE:
    case types.GET_ALL_ORDER_FAILURE:
        return{
           ...state,
            loading: true,
            error: action.error,
        };

    default:
        return state;
  }
};

export default orderReducer;
import {useReducer} from "react";
import { UPDATE_PRODUCTS, UPDATE_PRODUCT, UPDATE_AMOUNT } from "./actions";

const initialState = {
    products:[],
    product:[],
    amount:0,
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_PRODUCTS:
            return{
                ...state,
                products:[...action.products],
            }
        case UPDATE_PRODUCT:
            return{
                ...state,
                product: action.product
            }
        case UPDATE_AMOUNT: 
            return {
                ...state,
                amount: action.amount,
            }
    default:
        return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}
export default reducer;
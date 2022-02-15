import {useReducer} from "react";
import { UPDATE_PRODUCTS } from "./actions";

const initialState = {
    products:[],
    
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_PRODUCTS:
            return{
                ...state,
                products:[...action.products],
            }
    default:
        return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}
export default reducer;
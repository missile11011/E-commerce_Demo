import {useReducer} from "react";
import { UPDATE_PRODUCTS, UPDATE_PRODUCT, UPDATE_AMOUNT, ADD_TO_CART, UPDATE_CART, TOGGLE_CART } from "./actions";

const initialState = {
    products:[],
    product:[],
    amount:0,
    cart:[],
    cartOpen:false,
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
        case ADD_TO_CART:
            return{
                ...state,
                cart: [...state.cart, action.product] 
            }
        case UPDATE_CART:
            return{
                ...state,
                cart: state.cart.map((product) => {
                    if (action._id === product._id){
                        product.purchaseQuantity = action.purchaseQuantity; 
                    }
                    return product; 
                })
            }
        case TOGGLE_CART:
            return{
                ...state,
                cartOpen: !state.cartOpen,
            }
    default:
        return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}
export default reducer;
import React, {useEffect}from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT } from '../utils/queries';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_PRODUCT, UPDATE_AMOUNT } from '../utils/actions';

const Product = ({match}) =>{
    const dispatch = useDispatch();
    const state = useSelector( state => state)
    const id = match.params._id
    const { loading, data } = useQuery(QUERY_PRODUCT,{variables:{product: id}});
    const {product, amount} = state
    
    useEffect(() => {
        if(data){
            dispatch({
                type: UPDATE_PRODUCT,
                product: data.product
            })
        }
    },[data]);
    
    function increment() {
        dispatch({
            type: UPDATE_AMOUNT,
            amount: amount+1
        })
        
    };
    function decrement() {
        if(amount>0){
            dispatch({
                type: UPDATE_AMOUNT,
                amount: amount-1
            })
        }
    };
    
    return(
        <div class="container my-auto">
            <div class="row m-4 justify-content-center">
                <img class="col-sm-10 h-100 col-lg-5 p-3 my-auto" src={product.image} />
                <div class="col justify-content-left">
                    <div class="title-text">
                        {product.name}
                    </div>
                    <div class="fs-2 description-text">
                        {product.description}
                    </div>
                    <div class="py-3 price-text">
                        ${product.price}
                    </div>
                    <div class="row px-3">
                        <div class="text-left">
                            <button class="btn btn-primary rounded-pill ">
                                add to cart
                            </button>
                        </div>
                        <div class="row px-5">
                            <button class="btn btn-dark rounded-pill" onClick={decrement}>
                                <i class="bi bi-dash"></i>
                            </button>
                            <p class="px-2 my-auto">{amount}</p>
                            <button class="btn btn-dark rounded-pill"onClick={increment} >
                                <i class="bi bi-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
};

export default Product;
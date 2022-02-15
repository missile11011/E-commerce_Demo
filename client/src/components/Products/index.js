import React, {useEffect} from 'react';
import {Link} from 'react-router';
import ProductItem from "../ProductItem"
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS} from "../../utils/queries"
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const { loading, data} = useQuery(QUERY_PRODUCTS);
    const { products } = state
    
    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products,
            })
            console.log("data",data)
        }
        else if (loading) {
            console.log("loading",loading)
        }
        
    },[data, dispatch])
    // const filterProducts = () =>{
        
    //     return state
    // }
    function productFilter(){
        if(!products){
            return state.products
        }
        return state.products
    }
    return (
		<div>
            <div class="container">
                <div class="row align-items-center">
                    {productFilter().map((product) => (
                        <div class="col-3 ">
                        <ProductItem
                            key={product._id}
                            _id={product._id}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}
                            image={product.image}
                        />
                        </div>
                    ))}
                </div>    
            </div>
		</div>
	);
}

export default Products;
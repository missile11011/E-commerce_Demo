import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./index.css"

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    return(
        <div class="py-3">
            <div class="row justify-content-evenly py-3 cart-item-shadow">
                <img class="img-thumbnail h-100 col-3 mx-2 my-auto" src={item.image}></img>
                <p class="col-4">{item.name}</p>
                <p class="col-2">${item.price}</p>
                <p class="col-2">QTY:{item.purchaseQuantity}</p>
            </div> 
        </div>
    )
}

export default CartItem;
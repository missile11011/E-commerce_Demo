import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { ADD_TO_CART, UPDATE_CART } from "../../utils/actions";

const ProductItem = (item) => {
    const {_id, name, price, quantity, image} = item;
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const { cart } = state;

    const addToCart = () => {
        const itemChecker = cart.find((cartItem) => cartItem._id === _id)
        if (itemChecker) {
            dispatch({
                type: UPDATE_CART,
                _id: _id,
                purchaseQuantity: parseInt(itemChecker.purchaseQuantity) + 1
            }) 
        }
        else {
            dispatch({
                type: ADD_TO_CART,
                product: {...item, purchaseQuantity: 1}
            }) 
        }
    }
    return(
        <div class="item-container col text-center my-3">
            <Link to={`/item/${_id}`}>
                <div class="text-dark text-center mb-1">
                    <div class="item-image-container">
                        <img class="img-fluid item-image p-3" src={image}/>
                    </div>
                    <p class="font-weight-bold item-title align-text-bottom overflow-hidden px-1">
                        {name}
                    </p>
                    <span class="item-price">
                        ${price}
                    </span>
                    <br></br>
                    
                </div>
            </Link>
            <button class="btn btn-primary rounded-pill" onClick={addToCart}>
                Add to Cart
            </button>
        </div>
    )

}

export default ProductItem;
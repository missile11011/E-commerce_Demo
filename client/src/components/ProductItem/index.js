import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";

const ProductItem = (item) => {
    const {_id, name, price, quantity, image} = item;
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    
    return(
        <div class="">
            <Link to={`/item/${_id}`}>
                <div class="text-dark text-center item-container mb-5">
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
                    <button class="btn btn-primary rounded-pill m-2">
                        Add to Cart
                    </button>
                </div>
            </Link>
        </div>
    )

}

export default ProductItem;
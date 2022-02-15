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
                <div class="text-dark text-center">
                    <img class="img-fluid" src={image}>
                    </img>
                    <p class="font-weight-bold">
                        {name}
                    </p>
                    <span>
                        ${price}
                    </span>
                </div>
            </Link>
        </div>
    )

}

export default ProductItem;
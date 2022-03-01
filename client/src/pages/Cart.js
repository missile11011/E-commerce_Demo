import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
	const state = useSelector((state) => state);
	const { cart } = state;

    const shippingCost = parseFloat(Object.keys(cart).length*12).toFixed(2)
    const subTotal = () => {
		let total = 0;
		cart.map((item) => {
			total += item.price * item.purchaseQuantity
		})
        const subTotalNum = parseFloat(total.toFixed(2)) 
		return subTotalNum
    }
    const total = () => {
        const totalNum = parseFloat(shippingCost) + parseFloat(subTotal())
        return totalNum

    }
	return (
		<div class="container">
			<h1>cart</h1>
			<div class="row">
				<div class="col-7 ">
					{cart.map((item) => {
						return (
							<div>
								<CartItem key={item.id} item={item} />
							</div>
						);
					})}
				</div>
				<div class="col-4 align-self-start border mx-auto m-3">
					<h1 class="row p-2">Summary</h1>
                    <div class="row d-flex justify-content-between align-items-center p-3">
                        <h4>Subtotal:</h4>
                        <h5 class="">${subTotal()}</h5>
                    </div> 
                    <div class="row d-flex justify-content-between align-items-center p-3">
                        <h4>Shipping:</h4>
                        <h5 class="">${shippingCost}</h5>
                    </div>
                    <p class="row px-3">Estimate fixed-rate</p>
                    <div class="row d-flex justify-content-between align-items-center p-3">
                        <h4>tax:</h4>
                        <h5 class="">{}</h5>
                    </div>
                    <br></br>
                    <div class="row d-flex justify-content-between align-items-center px-3">
                        <h3>Total:</h3>
                        <h5 class="">${total()}</h5>
                    </div>
                    <div class="row">
                        <button class="btn btn-primary rounded-pill m-3 mx-auto">
                            Checkout
                        </button>
                    </div>
                    
				</div>
                
			</div>
		</div>
	);
};

export default Cart;

import React, {useState, useEffect, Component} from "react";
import {useSelector} from "react-redux";
import ShippingForm from "../components/ShippingForm";
import Auth from "../utils/auth";

export default function Checkout() {
	const [total, setTotal] = useState(0);
	const [stage, setStage] = useState(1);
	const state = useSelector((state) => state);
	const {cart} = state;

	useEffect(() => {
		const shippingCost = parseFloat(Object.keys(cart).length * 12);
		const subTotal = () => {
			let sum = 0;
			cart.map((item) => {
				sum += item.price * item.purchaseQuantity;
			});
			const subTotalNum = parseFloat(sum).toFixed(2);
			return subTotalNum;
		};
		setTotal(parseFloat(shippingCost) + parseFloat(subTotal()));
	}, [total]);
	
	const handleSubmit = () => {
		setStage(stage + 1);
		stagePosition();
	};
	const stagePosition = () => {
		if (stage === 1) {
			if (Auth.loggedIn) {
				setStage((stage) => stage + 1);
				console.log(stage);
			}
			return (
				<div class="col text-center">
					<h1>Not logged in</h1>
					<div>
						<button
							class="btn btn-primary m-2"
							onClick={handleSubmit}
						>
							Continue as geust
						</button>
						<p>or</p>
						<button class="btn btn-primary m-2">Login</button>
					</div>
				</div>
			);
		} else if (stage === 2) {
			return (
				<div class="col-6 m-3">
					<ShippingForm />
					<button
						class="btn btn-primary rounded"
						onClick={handleSubmit}
					>
						Submit
					</button>
				</div>
			);
		} else if (stage === 3) {
			return (
				<div class="col-6 m-3">
					<div className="App col-5 mx-auto">
						<h3>Paymemt</h3>
						<form action="/create-checkout-session" method="POST">
							<button type="submit">Checkout</button>
						</form>
					</div>
				</div>
			);
		}
	};
	return <div>{stagePosition()}</div>;
}

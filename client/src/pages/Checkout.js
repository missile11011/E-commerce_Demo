import React, { useState, useEffect, Component } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import CheckoutForm from "../components/CheckoutForm";
import ShippingForm from "../components/ShippingForm";
import Auth from "../utils/auth";

const stripePromise = loadStripe(
	"pk_test_51KYfOOHOMpPyIznJJw8smgIiP7aaOygzJAcRCiNvZYzZq0lz5NJumR9QnhS1xZCSf1KcPAUYKZHo2tU2NmlLTJvO00kR88grXB"
);

export default function Checkout() {
	const [clientSecret, setClientSecret] = useState("");
	const [total, setTotal] = useState(0);
	const [stage, setStage] = useState(1);
	const state = useSelector((state) => state);
	const { cart } = state;

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
		console.log("total", total)
		fetch("/create-payment-intent", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ total: parseInt((total*100).toFixed(2)) }),
		})
		.then((res) => res.json())
		.then((data) => setClientSecret(data.clientSecret));
	}, [total]);
	
	const appearance = {
		theme: "stripe",
	};
	const options = {
		clientSecret,
		appearance,
	};

	const handleSubmit = () => {
		setStage((stage) => stage + 1);
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
						<button class="btn btn-primary m-2">
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
				<div>
					<div className="App col-5 mx-auto">
						{clientSecret && (
							<Elements options={options} stripe={stripePromise}>
								<CheckoutForm total={total} />
							</Elements>
						)}
					</div>
				</div>
			);
		}
	};
	return <div>{stagePosition()}</div>;
}

const db = require("./connection");
const {Product} = require("../models");
const fetch = require("node-fetch");
require("dotenv").config({path: "../.env"});

const createStripeProduct = async (name, description, image, price) => {
	const inputs = {
		name: name,
		description: description,
		image: [image],
		price: price * 100,
	};
	const response = await fetch("http://localhost:3001/create-product", {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(inputs),
	});
	return response.json();
};
db.once("open", async () => {
	await Product.deleteMany();
	await fetch("https://fakestoreapi.com/products")
		.then((res) => res.json())
		.then(async (json) => {
			for (let i = 0; i < 2; i++) {
				const name = json[i].title;
				const description = json[i].description;
				const price = json[i].price;
				const quantity = Math.floor(Math.random() * 1000);
				const image = json[i].image;
				const stripeProduct = await createStripeProduct(
					name,
					description,
					image,
					price
				);
				await Product.create({
					name: name,
					description: description,
					price: price,
					quantity: quantity,
					image: image,
					priceid: stripeProduct.default_price,
				});
			}
		});
	process.exit();
});

const express = require("express");
const path = require("path");
const {ApolloServer} = require("apollo-server-express");

const db = require("./config/connection.js");
const PORT = process.env.PORT || 3001;
const app = express();
const router = express.Router();
const {authMiddleware} = require("./utils/auth");
const {typeDefs, resolvers} = require("./schema");
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: authMiddleware,
});
require("dotenv").config({path: "../.env"});

const stripe = require("stripe")(process.env.STRIPE_API_KEY);
server.applyMiddleware({app});

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// Serve up static assets
app.use("/images", express.static(path.join(__dirname, "../client/public")));

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post("/create-checkout-session", async (req, res) => {
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: "price_1MPIqUHOMpPyIznJWh9t4G8g",
				quantity: 1,
			},
			{
				price: "price_1MPIqUHOMpPyIznJWh9t4G8g",
				quantity: 1,
			},
		],
		mode: "payment",
		success_url: `http://localhost:3000/checkout`,
		cancel_url: `http://localhost:3000/test`,
		automatic_tax: {enabled: true},
	});
	res.redirect(303, session.url);
});

app.post("/create-product", async (req, res) => {
	const product = await stripe.products.create({
		name: req.body.name,
		description: req.body.description,
		images: req.body.image,
		default_price_data: {
			currency: "USD",
			unit_amount_decimal: req.body.price,
		},
	});
	res.send(product);
});
// app.post("/config", (req,res) => {
//   console.log("config route")
//   res.send("a;sdlkfja;sd")
// });
db.once("open", () => {
	app.listen(PORT, () => {
		console.log(`API server running on port ${PORT}!`);
		console.log(`App running on http://localhost:${PORT}`);
	});
});

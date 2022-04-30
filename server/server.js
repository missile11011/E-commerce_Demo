const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');

const db = require("./config/connection.js")
const PORT = process.env.PORT || 3001;
const app = express();
const router = express.Router();
const {authMiddleware} = require("./utils/auth")
const { typeDefs, resolvers } = require('./schema');
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/public')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post("/create-payment-intent", async (req, res) => {
  try{
    const {total} = req.body 
    const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
    payment_method_types: ['card'],
  });
  res.send({clientSecret: paymentIntent.client_secret})
  }
  catch(e){
    return res.status(400).send(e.message);
  }
  console.log("payment-intent route")
});

app.post("/config", (req,res) => {
  console.log("config route")
  res.send({stripeKey: process.env.STRIPE_SECRET_KEY})
});

db.once("open", ()=>{
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
})
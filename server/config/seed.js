const db = require("./connection");
const {Product} = require("../models") 
const fetch = require("node-fetch");

db.once("open", async () =>{
    await Product.deleteMany();
    await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then(async(json) => {
            for (let i = 0; i < Object.keys(json).length; i++) {
                const name = json[i].title
                const description = json[i].description
                const price = json[i].price
                const quantity = Math.floor(Math.random()*1000)
                const image = json[i].image
                await Product.create({name:name,description:description,price:price,quantity:quantity,image:image})
            }
        })
    process.exit();
});
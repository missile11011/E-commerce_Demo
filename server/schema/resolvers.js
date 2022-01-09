const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Order, Cart} = require ("../models");

const resolvers = {
    Query: {
        products: async()=>{
            return await Product.find()
        }
    },
    Mutation: {
        addProduct: async(parent, args) => {
            const product = await Product.create(args);
            console.log(product)
            return product
        }
    }
}

module.exports = resolvers;
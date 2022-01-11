const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Order, Cart} = require ("../models");
const { findOneAndDelete } = require('../models/User');

const resolvers = {
    Query: {
        products: async()=>{
            return await Product.find()
        },
        product: async(parent, args)=>{
            return await Product.findById(args)
        },
    },
    Mutation: {
        addProduct: async(parent, args) => {
            return await Product.create(args);
        },
        productStock: async(parent, {_id, quantity}, context) => {
            const decerment = Math.abs(quantity) * -1
            return await Product.findByIdAndUpdate(_id,{ $inc: {quantity: decerment}})
        },
        updateProduct: async(parent, args) => {
            await Product.findById(args).updateOne(args);
            return Product.findById(args)
        },
        deleteProduct: async(parent, args) => {
            return await Product.findOneAndDelete(args)
        },
    }
}

module.exports = resolvers;
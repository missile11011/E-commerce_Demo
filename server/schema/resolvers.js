const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Order, Cart} = require ("../models");
const { findOneAndDelete } = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        products: async()=>{
            return await Product.find()
        },
        product: async(parent, args)=>{
            return await Product.findById(args)
        },
        user: async(user, args, context)=>{
            if (context.user) {
            const user = await User.findById(context.user._id)

            return user;
        }
        throw new AuthenticationError('Not logged in');
        }
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
        createUser: async(parent, {email, firstName, lastName, password}) => {
            const user = await User.create({email, firstName, lastName, password, role: "User" })
            const token = signToken(user)
            return {token, user}
        },
        login: async(parent,{email, password}) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        }
    }
}

module.exports = resolvers;
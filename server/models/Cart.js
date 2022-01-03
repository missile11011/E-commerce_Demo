const mongoose = require('mongoose');

const { Schema } = mongoose;

const CartSchema = new Schema({

    
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
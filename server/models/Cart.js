const mongoose = require('mongoose');

const { Schema } = mongoose;

const CartSchema = new Schema({
    products: [{
        type: Schema.Types.ObjectID,
        ref: "Product"
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
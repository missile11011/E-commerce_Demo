const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now()
    },
    products: {
        type: Schema.ObjectId,
        ref: "Product",
        required: true
    },
    status: {
        type: String,
        enum: ["Cancelled","Complete","Processing"],
        required: true
    }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
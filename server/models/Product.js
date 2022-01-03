const mongoose = require('mongoose');

const { Schema } = mongoose;

const CartSchema = new Schema({
    name: {
        type:String,
        required:true,
        trim:true
    },
    description: {
        type:String,
        required: true,
    },
    price: {
        type:Number,
        required: true,
    },
    quanity: {
        type:Number,
        required: true
    },
    image: {
        
    }
});

const Product = mongoose.model('Product', CartSchema);

module.exports = Product;
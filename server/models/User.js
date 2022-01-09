const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    userName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type:String,
    },
    role: {
        type: String,
        enum: ["Admin", "User", "Manager", "Guest"],
        required: true,
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
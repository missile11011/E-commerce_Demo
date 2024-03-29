const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    password: {
        type:String,
    },
    role: {
        type: String,
        enum: ["Admin", "User", "Manager", "Guest"],
    
    }
});

UserSchema.pre("save", async function(next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});
UserSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
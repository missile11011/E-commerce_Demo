const mongoose = require('mongoose');

const { Schema } = mongoose;

const RoleSchema = new Schema({

    
});

const Role = mongoose.model('Role', RoleSchema);

module.exports = Role;
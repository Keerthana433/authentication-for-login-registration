const mongoose = require('mongoose');
const {Schema, model} =  mongoose

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, minlength: 3},
    password: { type: String, required: true, minlength: 3}
}, {
    timestamps: true
});

const Users = model('userCollection', userSchema)
module.exports = Users
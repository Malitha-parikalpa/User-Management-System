const mongoose = require('mongoose');  //import mongoose library 
const Schema = mongoose.Schema;

const userSchema  = new Schema({
    id: Number,
    name: String,
})

const User = mongoose.model('model',userSchema);

module.exports = User;
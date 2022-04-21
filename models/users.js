const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    name: String,
    surname: String,
    age: Number,
    createdAt: Date,
    updatedAt: Date,
    

});
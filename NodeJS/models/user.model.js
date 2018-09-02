'use strict'

const mongoose = require("mongoose");

var Schema = mongoose.Schema;

let userSchema = mongoose.Schema({

    fullname: String,
    email: String,
    password: String,
    saltsecret: String
})
const User=
mongoose.model("user", userSchema);

module.exports = { User }; 
'use strict'

const mongoose = require("mongoose");

let counrtrySchema = mongoose.Schema({
    countryid: Number,
    name: String,
    code: String

});

const Country = mongoose.model("counrtry", counrtrySchema);

// Note :  module.exports = Employee;  will not work
module.exports = { Country };  
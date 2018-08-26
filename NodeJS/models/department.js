'use strict'

const mongoose = require("mongoose");

let departmentSchema = mongoose.Schema({

    No: Number,
    Name: String,
    Code: String
});


const Department = mongoose.model("department", departmentSchema);

// Note :  module.exports = Employee;  will not work
module.exports = { Department };  


'use strict'

const mongoose = require("mongoose");

var Schema = mongoose.Schema;

// https://medium.freecodecamp.org/introduction-to-mongoose-for-mongodb-d2a7aa593c57

//  https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

let employeeSchema = mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    position: String,
    department: {
        type: Schema.ObjectId,
        ref: 'department'
    },
    salary: Number,
    age: {
        type: Number,
        min: 18,
        max: 65,
        required: true
    },
    hobbies: [String],
    address:
    {
        streetName: String,
        permanentAddress: String,
        presentAddress: String,
        isSameAddress: Boolean,
        country:
        {
            type: Schema.ObjectId,
            ref: 'country'
        }
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

const Employee = mongoose.model("employee", employeeSchema);

// Note :  module.exports = Employee;  will not work
module.exports = { Employee };  
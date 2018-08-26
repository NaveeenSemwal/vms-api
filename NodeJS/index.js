const express = require("express");
const bodyparser = require("body-parser");

// This is called Object destructing
const { mongoose } = require("./db.js");

var employeeController = require("./controllers/employeeController.js");
var departmentController = require("./controllers/departmentController.js");

var app = express();

// To get JSON body in request.
app.use(bodyparser.json());

app.listen(3000, function () {
    console.log("Server started at port : 3000");
})

// this is a kind of base URL for this controller.
app.use("/employees", employeeController);
app.use("/department", departmentController);

// Note : sequence is important here. Index.js will be the Index.html in Angular. So if do not reference employeeController 
//        Index.js will not able to identify and execute it.
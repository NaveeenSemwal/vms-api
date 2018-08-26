const express = require("express");

const router = express.Router();

var { Employee } = require("../models/employee.js");

// http://localhost:3000/employees/list
router.get("/list", (req, res) => {

    Employee.find((error, docs) => {

        if (!error) {

            res.send(docs);

        } else {
            console.log("Error occurred while fetching Employee list. " + JSON.stringify(error));
        }
    });
});

module.exports = router;
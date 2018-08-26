const express = require("express");

const router = express.Router();

var { Department } = require("../models/department.js");

// http://localhost:3000/department/list
router.get("/list", (req, res) => {

    Department.find((error, docs) => {

        if (!error) {

            res.send(docs);

        } else {
            console.log("Error occurred while fetching Department list.");
        }
    });
});

router.post("/save", (req, res) => {

    var dept = new Department({

        No: req.body.no,
        Name: req.body.name,
        Code: req.body.code
    });

    dept.save((err, docs) => {

        if (err) {
            console.log("Error occured while saving the Department." + JSON.stringify(err));
        } else {
            res.send(docs);
        }
    })
})

module.exports = router;
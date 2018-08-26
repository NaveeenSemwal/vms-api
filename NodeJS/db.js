const mongoose = require("mongoose")

const server = 'localhost:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'EMS';      // REPLACE WITH YOUR DB NAME

// need to replace this hard coding server and port.
mongoose.connect("mongodb://localhost:27017/EMS", { useNewUrlParser: true }, (err) => {

    if (!err) {

        console.log("MongoDB Connection succeeded..");
    } else {
        console.log("Error in MongoDB Connection.  " + JSON.stringify(err));
    }

})

// Since every .js file in the Node.js is the module.
// So to use this module outside of this file , we need to export this module.
module.exports = mongoose;
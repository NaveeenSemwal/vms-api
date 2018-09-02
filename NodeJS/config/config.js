
// checking envirnment . process.env.NODE_ENV  is the envirnment variable. We are setting the value here.
var env = process.env.NODE_ENV="development";

var config = require("./config.json");

// This will ktell current envirnment

var selectenv = config[env];


// https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html


// Assign values in ENV variables in PORT and MONGODB_URIe
Object.keys(selectenv).forEach(x => process.env[x] = selectenv[x])

//console.log('The value of PORT is:', process.env.PORT);



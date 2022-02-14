// always call the file to run the server app.js so it is universal

//import express
//importing library
const express = require("express");
//importing app
const app = express();
// oneliner(cannot access lib functions)
// const app = require("express")();

// allow us to parse json (body-parser)
app.use(express.json());

// order
//callback function on app.get to get it to execute when the route is hit (req, res is client server model)
//res.send is response, we send json {}
//express converts the message to json, even though it is a javascript object.
app.get("/", (req, res) => {
    res.send({ message:"We did it!" });
});

// implement a route called welcome that welcomes the client
// same task implement a rout handler on the enpoint /welcome
app.get("/welcome", (req, res) => {
    res.send({ message:"Welcome client you made it!" });
});

// post endpoint use app.xxx to do things like patch/delete/put/get and so forth
app.post("/mirror", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});



// task implement an empty callback function in the line above (only)

//server.port in pom, app.listen must be in the bottom of the file.
app.listen(8080);


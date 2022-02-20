// always call the file to run the server app.js so it is universal
// to run a server you write - node app.js

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

app.get("/clientgreeting/:name", (req, res) => {
    res.send({greeting: `Hello there, ${req.params.name}`});
});

// query url - kangaroofacts?cankick=true
app.get("/kangaroofacts", (req,res) => {
    res.send(req.query);
});

// post endpoint use app.xxx to do things like patch/delete/put/get and so forth
app.post("/mirror", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

// task implement an empty callback function in the line above (only)

//server.port in pom, app.listen must be in the bottom of the file.
app.listen(8080, (error) => {
    // callback function that happens after the server has startet running on the port
    console.log("Server is running on port", 8080);
});

// How can i send data with a GET request??
// Parameters in the URL - path variable            url: /1
// query string -                                   url: ?key=value&key2=value2

// .getmonth gives the number of the month, starting at 0
// .getday gives the number of the day of week, starting on sundays at 0
console.log(new Date());
console.log(Date());
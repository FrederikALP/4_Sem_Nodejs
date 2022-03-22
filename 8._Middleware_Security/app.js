//When using modules, you cannot import express this way anymore
//const express = require("express");
import express from "express";
//this is the new module way to import express
// //"type": "module", that has to be fixed and you cannot use get in the same way
//  type module has to be added in package.json for modules to be "activated"
const app = express();

app.use(express.static('public'));

//Helmet is a security package that you can add to your app, it will help you but doesnt stop all things
//there is explanation in the github and package page
// we can install helmet and use it as middleware and it is executed on all requests and potentially make your application safer
//against hostile attacks
// helmet has been imported as middleware just with these 2 lines
import helmet from "helmet";
app.use(helmet());

//"type": "module", that has to be fixed and you cannot use get in the same way
/*app.get("/clothes", (req, res) => {
    res.sendFile(__dirname + "/public/clothes.html");
});*/

// there is a package called npm morgan that has to do with ipLogger, not sure if it is in express already or if it is an extra
// package you can use, Anders didnt explain
// this will make all routes that start with /auth/ be iplogged, if /auth/ is removed it will be used on all endpoints in the app
app.use("/auth/*", ipLogger);

// this function displays the ip in the log, usually it is something that is logged to a file
// the ip looks odd because we are on localhost
function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

app.get("/frontgate", ipLogger, (req, res) => {
    res.send({});
});

// this covers 2 topics, middleware and security, we can control who can access certain parts of our website
// and have a flow through our routes
let isHatchOpen = true;
function allowEscape(req, res, next) {
    if (isHatchOpen) {
    console.log("Go on");
    req.escapee = "Jimmy";
    next();
    } else {
    res.send({ message: "You are not allowed to pass" });
    }
}
//next passes on the req and res to the /escapehatch path thus Jimmy can be passed via req.escapee

// allowEscape is a middleware function, it has to be in the middle so the order matters
app.get("/escapehatch", allowEscape, (req, res) => {
    res.send({ message: `Congrats ${req.escapee}, you have managed to escape!` });
});

//if 2 routes /room is occupied the first endpoint in the code will be the one that is served first, as it is
// the client server model it will only send one response per request
app.get("/room", (req, res, next) => {
    console.log("You are in room 1");
    // it will throw an error if there is any data in this response though
    //res.send({ data: "You are in room 1"});
    //next gives the next path/route in the code, so it will run this code in the the first app.get
    //but then send the client to the next path or rather next route and thus push in this case the data "you are in room 2"
    next();
});

app.get("/room", (req, res) => {
    res.send({ data: "You are in room 2"});
    // if a next is added to this, it will not get any response from the server, but it is moving you to the next path that matches
    // /room but there is none
});

// this is a fallback but also called a wildcard route that when any route that doesnt exist on the server is attempted to be accessed
// then the server will give this response
// if this route is above any other routes it will hit this route instead of the other one, so the order of
// how routes and things are done on the server is important
app.get("*", (req, res) => {
    res.send("<h1>Not found 404<h1>");
});

const PORT = process.env.PORT || 9000;

const server = app.listen(PORT, () => {
    console.log("The Server is running", server.address().port);
});
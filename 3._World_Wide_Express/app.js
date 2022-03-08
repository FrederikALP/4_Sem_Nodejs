const express = require("express");
const app = express();
const fetch = require("node-fetch");

//use node-fetch
//create endpoint /proxy
//fetch from googles homepage
//response.text()
//send the page as a response


// specifies the static folder for the client, allowing the client to access the files on this path
// it is a security feature to allow the client only access to certain parts
app.use(express.static('public'));

// importing modules from dinosaurs folder, specifically from dinosaurs.js
// using destructurizing to access the specific function you can use a comma to import additional things
// const { calculateAmountOfCoolDinosaurs } = require("./dinosaurs/dinosaurs.js");
// console.log(calculateAmountOfCoolDinosaurs());

const dinosaurrouter = require("./routers/dinosaurrouter.js");
// app.use("/dinosaurs", dinosaurrouter.router);     // this is being used to add another /endpointname/ to the url
app.use(dinosaurrouter.router);  //only uses the endpoint specified in the router


// it is called a route as a whole
app.get("/", (req, res) => {
    // __ signifies that it is total global, it is a global variable
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

//node-fetch is not the same as fetch in browser, they reuse some of the same code but still not quite the same
app.get("/proxy", (req, res) => {
    fetch("https://www.google.dk")
        .then(res => res.text())
        .then(page => res.send(page));
});

//async/await method
app.get("/proxyawait", async (req, res) => {
    const response = await fetch("https://www.google.dk")
    const homepage = await response.text();
        res.send(homepage);
});

// "" does not allow multiple lines
// `` allows multiple lines
app.get("/welcome", (req, res) => {
    res.send(`
    <h1>Welcome to my website</h1>
    <h2>Take a look ${true}</h2>
    `);
});

// sendFile to send a file as a response
app.get("/bored", (req, res) => {
    // __dirname gives the path of where the file it is written is located
    res.sendFile(__dirname + "/public/activities.html");
});

// create a fallback port
const PORT = process.env.PORT || 9000;

// to run on a different port
// PORT="NUMBER" nodemon app.js
// For windows - SET PORT="NUMBER"" && node app.js 
const server = app.listen(PORT, () => {
    console.log("The Server is running", server.address().port);
});

//npm i --save-dev cross-env
//cross user/platform environment package
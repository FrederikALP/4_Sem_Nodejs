const express = require("express");
const app = express();

// "" does not allow multiple lines
// `` allows multiple lines
app.get("/", (req, res) => {
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


app.listen(8080, () => {
    console.log("The Server is running", 8080);
});
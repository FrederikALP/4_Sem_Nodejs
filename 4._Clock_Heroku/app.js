const express = require("express");
const app = express();
app.use(express.static('public'));

// "" does not allow multiple lines
// `` allows multiple lines
app.get("/", (req, res) => {
    res.send(`
    <h1>Welcome to my website</h1>
    <h2>Take a look ${true}</h2>
    `);
});

// sendFile to send a file as a response
app.get("/clock", (req, res) => {
    // __dirname gives the path of where the file it is written is located
    res.sendFile(__dirname + "/public/clock.html");
});


app.listen(8080, () => {
    console.log("The Server is running", 8080);
});
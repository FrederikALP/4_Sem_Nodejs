const express = require("express");
const app = express();

// specifies the static folder for the client, allowing the client to access the files on this path
// it is a security feature to allow the client only access to certain parts
app.use(express.static('public'));

app.get("/", (req, res) => {
    // __ signifies that it is total global, it is a global variable
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
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


app.listen(8080, () => {
    console.log("The Server is running", 8080);
});
const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const themepark = fs.readFileSync("./public/pages/themepark/themepark.html").toString();

//can also do %%CSS_LINK%% and replace the css for each file
const frontpagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "The Theme Park") + frontpage + footer;
const themeparkPage = nav.replace("%%TITLE_PLACEHOLDER%%", "Have fun!") + themepark + footer;

//This is Server Side Rendering
app.get("/", (req, res) => {
    res.send(frontpagePage);
});

// nodemon -ext=html,json,js app.js
// for nodemon to restart when other files than just js files are changed

// This is client side rendering
// task create the frontpage and the themepark pages serve them with express
//app.get("/", (req, res) => {
//    res.sendFile(__dirname + "/public/pages/frontpage/frontpage.html");
//});

app.get("/themepark", (req, res) => {
    res.send(themeparkPage);
});

//app.get("/themepark", (req, res) => {
//    res.sendFile(__dirname + "/public/pages/themepark/themepark.html");
//});

app.listen(8080, () => {
    console.log("The Server is running", 8080);
});
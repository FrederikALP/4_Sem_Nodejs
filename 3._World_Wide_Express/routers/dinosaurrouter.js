const { application } = require("express");

// it is not another app/server
// dummy router named by Anders, allows you to setup routes, but not smart enough to set up a server
const router = require("express").Router();
const { calculateAmountOfCoolDinosaurs } = require("../dinosaurs/dinosaurs.js");

router.get("/calculatecooldinosaurs", (req, res) => {
    res.send({ data: calculateAmountOfCoolDinosaurs() });
});

// redirection method
router.get("/amountofccooldinosaurs",(req, res) => {
    res.redirect("/calculatecooldinosaurs");
});

// localhost:3000/coolestdinosaur?cool=yes
router.get("/coolestdinosaur", (req,res) => {
    if (req.query.cool === "yes") {
        return res.send({ dinosaur: "Mosasaurus" });
    }
    res.send({ dinosaur: "T. Rex" });
});

// for exporting singular things
//module.exports = router;

// for exporting several items
module.exports = {
    router
};
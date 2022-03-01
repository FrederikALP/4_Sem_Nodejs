const { coolDinosaurs, shittyDinosaurs } = require("./dinosaurs.json");

const people = {
    first: "Frederik",
    second: "Thor"
}

const { first, second,third } = people;


function amountOfCoolDinosaurs() {
    return coolDinosaurs.length;
}

module.exports = {
    calculateAmountOfCoolDinosaurs: amountOfCoolDinosaurs
}
const express = require("express");
const app = express();

app.use(express.json());

// array of beers
const beers = [
    { id: 1, name: "Grøn Pilsner", brand: "Tuborg" },
    { id: 2, name: "Classic", brand: "Tuborg" },
    { id: 3, name: "Hof", brand: "Carlsberg" },
    { id: 4, name: "Pilsner", brand: "Royal Eksport" },
];

// earlier incremented method which isnt suitable
// let incrementedBeerId = beers.length+1;
let beerId = 0;

beers.forEach(beer => {
    if (beer.id >= beerId);
    {
        beerId = (beer.id) +1;
    }
});

function incrementedId () {
    const newBeerId = beerId;
    beerId +=1;
    return newBeerId;
};

// get
app.get("/beers", (req,res) => {
    res.send({ data: beers });
});

// get by id
// find is better than filter because filter goes through the whole array
app.get("/beers/:id", (req,res) => {
    const foundBeer = beers.filter(beer => beer.id === parseInt(req.params.id));
    foundBeer ? res.send({ data: foundBeer })  : res.status(204).send({});
});

// post
app.post("/beers", (req, res) => {
    const postBeer = {id: incrementedId(), name: req.body.name, brand: req.body.brand};
    beers.push(postBeer);
    res.send(postBeer);
});

// put
app.put("/beers/:id", (req, res) => {
    const beerReplace = req.body;
    beerReplace.id = parseInt(req.params.id);

    const indexReplace = beers.findIndex(beer => beer.id === parseInt(req.params.id));
    if (indexReplace !== -1) {
        beers[indexReplace] = beerReplace;

        res.send(req.body);
    }
});

// patch
app.patch("/beers/:id", (req, res) => {
    const beerPatch = req.body;
    beerPatch.id = parseInt(req.params.id);

    const beerIndex = beers.findIndex(beer => beer.id === parseInt(req.params.id));

    if (beerIndex !== -1) {
        if (beerPatch.name !== undefined) {
            if (beers[beerIndex].name !== beerPatch.name) beers[beerIndex].name = beerPatch.name;
        } 
        if (beerPatch.brand !== undefined) {
            if (beers[beerIndex].brand !== beerPatch.brand) beers[beerIndex].brand = beerPatch.brand;
        }
        res.send(beers[beerIndex]);
    }
});

// delete
app.delete("/beers/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const indexRemove = beers.findIndex( beer => beer.id === id);
    beers.splice(indexRemove,1);
    res.send({ message:"something was deleted so postman gives a response" });
});

app.listen(8080);
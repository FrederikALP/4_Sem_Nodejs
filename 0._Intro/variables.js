// "use strict";
// strict mode, needs to be on the top level. Can also be on certain functions.

// Bad practice
// var globalVariable = "Don't do this";

// Never ever do this
// totalGlobalVariable = "is this okay?";

// do not use var, const and let is new and has been added because var is deprecated
// needs to be initialized or it will give an error(a value must be given)
// const cannot be overwritten, but there can be added on to it, for example const tal = 1; tal + 1;
const memeTop = "Mom: We have Javascript at home";
// does not need to be initialized
let memeBottom = "Javascript at home: Node.js";

const meme = {
    points: 43543
};

meme.age = "old";
meme.points += 1;
console.log(meme);

// a new scope, for example the scope of a function (a closure)
{
    let someValue = true;
    {
        let someValue = false;
    }
    console.log(someValue);
}

{
    var someValue = true;
    {
        var someValue = false;
    }
    console.log(someValue);
}

// will print the numbers from 0 to 9.
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        // console.log(i);
    }, 1000);
}

// will print 10, 10 times. because var leaks outside of the scope
for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}


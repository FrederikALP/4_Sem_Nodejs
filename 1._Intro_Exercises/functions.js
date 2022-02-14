// Because of "hoisting" the function is run before, as it is hoisted to the top so add is called before.
// console.log(add(2, 8));

function add(x, y) {
    return x + y;
};

// anonymous function after the equal sign
const addInAVariable = function (x,y) {
    return x + y;
};

// arrow function with lambda (=>)
const addArrowFunction = (x,y) => {
    return x + y;
};

// can also be done without return
// const is not necessarily a constant
const addArrowFunctionTwo = (x,y) => x + y;

// running fishing passing
// running
function doActionWithSomeone(anyFunctionReference, name) {
    anyFunctionReference(name);
};

const running = (name) => console.log(`${name} is running `);

// this is a callback function. The function is making a call back to a different function.
doActionWithSomeone(running, "Anders");

// fishing
function doActionWithSomeoneWithReturn(anyFunctionReference, name) {
    return anyFunctionReference(name);
};

const fishing = (name) => `${name} is running `;

console.log(doActionWithSomeoneWithReturn(fishing, "Alex"));

// passing + any action of your choosing
function doActionWithSomeoneMyChoosing(anyFunctionReference, anyFunctionReferenceTwo, name, nameTwo) {
    anyFunctionReference(name, nameTwo);
    anyFunctionReferenceTwo(nameTwo);
};

const passing = (name, nameTwo) => console.log(`${name} has passed the ball to ${nameTwo}`);

doActionWithSomeoneMyChoosing(passing, running, "Frederik", "Michael");

// oneliner callback
// doActionWithSomeoneOneLiner((name) => (console.log(`${name} is doing`), 'Frederik'));
doActionWithSomeone(name => (console.log(`${name} anything`)), "stuff");

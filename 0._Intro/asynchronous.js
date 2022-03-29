// Why
// Javascript is single-threaded
// We don't want to block our application

// When do we need to handle asynchronous behaviour
// over the network: for instance fetch as we dont know when the result is coming back
// file handling, saving, reading, writing
// setTimeout, setInterval
// databases

// Promise has different states
// pending
// fulfilled
    // resolved or rejected

/* assignment create a function called somethingGoodSomethingBad 
it should return a promise - that is to say that we wrap the function in a promise
BEWARE: you should not handle the promise.. just create a function that returns a promise
make it take 4 seconds to complete */

function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error;
                resolve("Good");
            } catch {
                reject("Bad");
            }
        }, 4000);

    });
};


// this is an IIFE, the parenthesis around the whole function makes it a scope and makes it be called instantly instead of
// waiting for it because of hoisting
(async function callMyCustomPromise() {
    try {
        const message = await somethingGoodSomethingBad();
        console.log(message);
    } catch (errorMessage) {
        console.log(errorMessage);
    }

})()

/*
const fileHandling = handleFile();
const fileHandling2 = handleFile2();
Promise.all([handleFile, handleFile2])
/*

//callMyCustomPromise();

//somethingGoodSomethingBad()
//.then(message => console.log(message));

/*
new Promise((resolve, reject) => {
    // resolve("Everying went well");
    try {
        throw new Error("bomb!");
        resolve("Everything went well"); // it can have any datatype, but you cannot give it multiple
    } catch (errorMessage) {
        reject("Something went wrong" + errorMessage);
    }
})
.then(message => console.log(message)) //handling the resolve promise
.catch(errorMessage => console.log(errorMessage)); //handling the reject promise

function callbackhell() {
    () => {
        () => {

        }
    }
}

setInterval(() => {
    console.log("Second");
}, 10);
console.log("First");
*/
const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));
let lastItem = userArray.length - 1;

console.log(`The last item in your array is ${userArray[lastItem]}.`);

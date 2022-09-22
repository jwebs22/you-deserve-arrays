const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));
let str = userArray[2];

if (typeof str === "string")
{
    console.log(`The Second character in your Third item is ${str[1]}.`);
} else
{
    console.log("Error! 3rd Item is not a String.");
}


const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));


if (typeof userArray[0] === "number")
{
    console.log("The first item in your array is a number!");
} 


const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

let num = typeof userArray[0] === "number"

if (num === true)
{
    console.log("The first item in your array is a number!");
} else 
{
    console.log("Your first item is not a number.");
}
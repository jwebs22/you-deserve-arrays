const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));


if (userArray.length >= 10 === true)
{
    console.log("Your array length had 10 or more items!");
} else 
{
    console.log("Your array had less than 10 items.");
}
const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));
let lastItem = userArray.length - 1;

if (userArray.length >= 4)
{
    console.log(`The item indexed 3rd (the 4th item) in your array is ${userArray[3]}.`);
} else 
{
    console.log(`The last item in your array is ${userArray[lastItem]}.`);
}


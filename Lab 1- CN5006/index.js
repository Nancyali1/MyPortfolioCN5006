//Exercise 1
console.log("Welcome to CN5006!")
console.log("This is lab 1")

//Exercise 2
const num1 =5;
const num2 =15;
//add two numbers
const sum = num1 + num2;
//display the sum
console.log("The sum is " + sum);

//Exercise 3

//input from user
const prompt = require ("prompt-sync")({sigint:true})

const number = parseInt(prompt("Enter a number: "));

//check if number is greater than 0 and display output
    if(number > 0) {
    console.log("The number is positive");
}

//check if number is 0
else if (number == 0) {
    console.log("The number is 0");
}

//check if number is less than 0
else {
    console.log("The number is negative");
}

//subtraction 
const snum1 = parseInt(prompt("Enter a number: "));
const snum2 = parseInt(prompt("Enter a second number: "));
const sub = snum2 - snum1;
console.log("The subtraction is " + snum2 + " and " + snum1 + " is " + sub);

//multiplication
const mnum1 = parseInt(prompt("Enter a number: "));
const mnum2 = parseInt(prompt("Enter a second number: "));
const multiplication = mnum1 * mnum2;
console.log("The multiplication is " + mnum1 + " and " + mnum2 + " is " + multiplication) 

//division
const dnum1 = parseInt(prompt("Enter a number: "));
const dnum2 = parseInt(prompt("Enter a second number: "));
const divison = dnum1 / dnum2;
console.log("The divison is " + dnum1 + " and " + dnum2 + " is " + divison) 

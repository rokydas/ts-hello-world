"use strict";
// console.log("hello world");
var myCountry = "Bangladesh";
console.log("I love", myCountry);
var playerName = "Mashrafi";
var age = 40;
// playerName = 40; // it will be an error. Cause, we cannot set number to the string variable. 
// age = "Mashrafi" // it will be an error. Cause, we cannot set string to the number variable. 
// It's the power of TypeScript. 
console.log(playerName, age);
// See this. There are not any error. 
// We have to assign value to the variable in time of declaring variable to get TS's power.
var myName, myAge;
myName = "Roky Das";
myAge = 22;
myName = 22;
myAge = "Roky Das";
console.log(myName, myAge);
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 6));
// console.log(multiply('roky', 'riya')); 
// It will be an error. Because we initialize a and b as a number
// in the multiply function
// so, we cannot send string as a parameter in the multiply function.
var fruits = ['banana', 'pineapple'];
fruits.push('orange');
// fruits.push(5) // we cannot push number to a string array.
console.log(fruits);
var arr = ['roky', 22];
arr.push(3); // no error. 
// there is string and number element in the array
// arr.push(true); // error
// there is not boolean element in the array.
console.log(arr);
var person = {
    name: 'Roky Das',
    age: 22,
    isSingle: true
};
person.name = 'Roky Das Shagotam'; // no error
// person.name = 45; // error
// person.country = 'Bangladesh' // error
// we cannot add extra property in an object.

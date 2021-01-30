// console.log("hello world");

const myCountry = "Bangladesh"; 
console.log("I love", myCountry);

let playerName = "Mashrafi";
let age = 40;

// playerName = 40; // it will be an error. Cause, we cannot set number to the string variable. 
// age = "Mashrafi" // it will be an error. Cause, we cannot set string to the number variable. 

// It's the power of TypeScript. 

console.log(playerName, age);

// See this. There are not any error. 
// We have to assign value to the variable in time of declaring variable to get TS's power.
let myName, myAge;

myName = "Roky Das";
myAge = 22;

myName = 22;
myAge = "Roky Das";

console.log(myName, myAge);

function multiply(a: number, b: number) {
    return a * b;
}

console.log(multiply(5, 6));
// console.log(multiply('roky', 'riya')); 
// It will be an error. Because we initialize a and b as a number
// in the multiply function
// so, we cannot send string as a parameter in the multiply function.

let fruits = ['banana', 'pineapple'];
fruits.push('orange');
// fruits.push(5) // we cannot push number to a string array.
console.log(fruits);

let arr = ['roky', 22];
arr.push(3);  // no error. 
// there is string and number element in the array
// arr.push(true); // error
// there is not boolean element in the array.
console.log(arr); 

let person = {
    name: 'Roky Das',
    age: 22,
    isSingle: true
}

person.name = 'Roky Das Shagotam' // no error
// person.name = 45; // error
// person.country = 'Bangladesh' // error
// we cannot add extra property in an object.

// we can declare a specific typed variable 
let newName: string;
newName = "Roky Das";
console.log(newName);
// newName = 45; // error;

let numberArray: number[] = [];
numberArray.push(7);
// numberArray.push('rokydas') // error

// a variable declaration which can carry
// number and string both type of value
let numberOrString: string | number;
numberOrString = 22;
numberOrString = "Roky Das";
// numberOrString = true; error

let numberOrStringArray: (string | number)[] = [];
numberOrStringArray.push('rokydas');
numberOrStringArray.push(22);
// numberOrStringArray.push(true); error
console.log(numberOrStringArray);

// object declaration
let myObject: object;
myObject = {
    name: 'Roky Das',
    age: 22,
    cgpa: 3,
}
// myObject.isSingle = true; error
// myObject.name = 'Roky Das Shagotam', error
// we can add various type of property in this object.

// Now we can specific the property type also in an object
let myBiodata: {
    name: string,
    age: number,
    cgpa: number,
    isSingle: boolean
}

myBiodata = {
    name: 'Roky Das',
    age: 22,
    cgpa: 3,
    isSingle: true,
    // isWebDev: true // error
}

let a:any // we can assign any value to this variable. 
// but it's not the ts's power.

// any type of array
let anyArray: any[] = [];
anyArray.push("Bangladesh");
anyArray.push(22);
anyArray.push(true);

// any type of object
let country: {
    name: any,
    area: any,
    isSmall: any
}

country = {
    name: 666,
    area: 'It is area',
    isSmall: 'True'
}

// Any type is not the good decision. 
// If we use it, TS cannot give us extra facilities.

//Function 
// let myFunc: Function;
// c?:string // optional parameter
// c:string = 'Shagotam' // default parameter

const myFunc = (a: string, b: string, c:string = 'Shagotam') => {
    return `Hello ${a} ${b} ${c}`;
}

console.log(myFunc('Roky', 'Das'));

// Difference between void and undefined
// JS auto return undefined and TS return void
// void means nothing and undefined means a variable
// which is not defined. 
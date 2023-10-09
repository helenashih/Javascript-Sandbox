/* Take myString and capitalize the first letter */

const myString = 'economist';

let myNewString;
myNewString = myString[0].toUpperCase() + myString.substring(1);

// another way to capitalize the first letter

myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(myNewString);

// create a variable x that is a random number between 1 and 100 and variable y between 1 and 50

let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 50 + 1);

console.log(`Sum of x and y ${x} + ${y} = ${x+y}`);
console.log(`Diff of x and y ${x} - ${y} = ${x-y}`);
console.log(`Product of x and y ${x} * ${y} = ${x*y}`);
console.log(`Quotient of x and y ${x} / ${y} = ${x/y}`);
console.log(`Remainder of x and y ${x} % ${y} = ${x%y}`);
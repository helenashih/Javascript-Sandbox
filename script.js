/* Take myString and capitalize the first letter */

const myString = 'economist';

let myNewString;
myNewString = myString[0].toUpperCase() + myString.substring(1);

// another way to capitalize the first letter

myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(myNewString);
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


// create a function that generates unique random numbers

const randomID = (() => {
    function* randomIDGenerator() {
      let id = Date.now();
      
      while(true) {
        yield id++;
      }
    }
    
    const gen = randomIDGenerator();
    
    return () => gen.next().value;
  })()


  // Basic array samples

  const fruits = ['apple', 'peach', 'orange'];
  const berries = ['strawberry', 'blueberry', 'raspberry'];

  // concatenate arrays

  let allFruits = fruits.concat(berries);

  // or use a spread operator to concatenate

  allFruits = [...fruits, ...berries];
  console.log(`use a spread operator to flatten the array ${allFruits}`);

  // or use flatten method

  allFruits = [...fruits, berries, 2, 3, [4, 5], 6, 7, [8, 9, 10]];

  let arr = allFruits.flat();

  console.log(arr);

  // static methods on array objects Array.isArray, Array.from('12345') or Array.of()

  // create an array that reverse and add an additional element at the end
arr = [1, 2, 3, 4, 5];
arr.unshift(0);
arr.push(6);

console.log(arr.reverse());

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// concatenate arr1 and arr2 but remove duplicate 5

arr = [...arr1.slice(0, 4), ...arr2];
console.log(arr);

// spread operator also works on objects

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

let obj = {...obj1, ...obj2}
console.log(obj);

// spread works the same as Object.assign()

obj = Object.assign({}, obj1, obj2);
console.log(obj);

// define a simple class 'ToDo'

class ToDo {
    #id;
    #name;
    #completed;
    constructor(newID, newName, newStatus) {
        this.id = newID;
        this.name = newName;
        this.completed = newStatus;
    }
    get id() {
        return this.#id;
      }
      
    set id(newID) {        
        this.#id = newID;
      }
    
    get name() {
        return this.#name;
      }
      
    set name(newName) {
        this.#name = newName;
      }
    get completed() {
        return this.#completed;
    }
    set completed(newStatus) {
        this.#completed = newStatus;
    }

}
const todos = [
    new ToDo(1, 'Buy Fruits', false),
    new ToDo(2, 'Pick up dry clean', false),
    new ToDo(3, 'Do laundry', false)
];
console.log(todos); 
/* output of above
(3) [ToDo, ToDo, ToDo]
0
: 
ToDo {#id: 1, #name: 'Buy Fruits', #completed: false}
1
: 
ToDo {#id: 2, #name: 'Pick up dry clean', #completed: false}
2
: 
ToDo {#id: 3, #name: 'Do laundry', #completed: false}
*/

const person = new Object;
person.id = 1;
person.name = 'John Smith';
person.zip = '02243';

x = Object.keys(person);

console.log(x); // ['id', 'name', 'zip']

x = JSON.stringify(person);

console.log(x); // {"id":1,"name":"John Smith","zip":"02243"}

const personParsed = JSON.parse(x); 
console.log(personParsed); 
/* above 
{id: 1, name: 'John Smith', zip: '02243'}
id
: 
1
name
: 
"John Smith"
zip
: 
"02243"
[[Prototype]]
: 
Object
*/

console.log(`Object person value ${Object.values(person)}`); // Object person value 1,John Smith,02243

console.log(`Object entries in key-value pairs ${Object.entries(person)}`); // Object entries in key-value pairs id,1,name,John Smith,zip,02243

// destructure arrays

let numbers = [23, 55, 88, 68, 93];

const [first, second, third, ...remainders] = numbers;

console.log(first, second, third, remainders); // 23 55 88 (2) [68, 93]


// Create an array of objects called library. Add three objects with 'title', 'author', 'status' status would be 'own', 'reading', and 'read' -- all boolean

const library = [
    {
        title: 'Little Women', 
        author: 'Louisa May Alcott',
        status: {own: true, reading: false, read: false},
    }, 
    {
        title: 'Mockingjay',
        author: 'Suzanne Collins',
        status: {own: true, reading: false, read: false},
    },
    { 
        title: 'Nobodys fool',
        author: 'Richard Russo',
        status: {own: true, reading: false, read: false},
}
];

// finished reading all
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// destructure from the title from the first book and rename the variable to firstBook 
const { title: firstBook } = library[0];

console.log(firstBook); // Little Women

// turn the library obj into a JSON string

const libString = JSON.stringify(library);

console.log(libString); // [{"title":"Little Women","author":"Louisa May Alcott","status":{"own":true,"reading":false,"read":true}},{"title":"Mockingjay","author":"Suzanne Collins","status":{"own":true,"reading":false,"read":true}},{"title":"Nobodys fool","author":"Richard Russo","status":{"own":true,"reading":false,"read":true}}]

// use of rest parameters

function sum(...numbers) {
    let total = 0;
    for (const i of numbers) {
        total += i;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6));

// use arrow function to implement sum

const add = (...numbers) => {
    let total = 0;
    for (const i of numbers) {
        total += i;
    }
    return total;
}

console.log(add(1, 2, 3, 4, 5, 6, 7)); // 28

// another arrow function example with implicit return statement

const subtract = (a, b) => a - b; 

console.log(subtract(10, 7)); // 3

// some IIFE (immediatly invoked function expression) examples

// 1 with no parameters

(function() {
    const user = 'John Smith';
    console.log(user); // John Smith
    const hello = () => {console.log('Hello with IIFE')} //Hello with IIFE
    hello();
}) ();

// 2 with one parameter

(function( name ){
    console.log('Hello ' + name);
})('Jane Fonda'); // Hello Jane Fonda

// create an arrow function called getCelcius and pass in Fahrenheit
const getCelcius = (fDegree) => { return (fDegree - 32)*5/9; } 

console.log('75 degree F is ' + getCelcius(75) + 'in C'); //75 degree F is 23.88888888888889in C

// create a function called minMax() that takes an array of numbers and return an obj of min and max in the array
const minMax = (arr) => {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return  new Object({min: min, max: max});
}
console.log(minMax([1, 2, 3, 4, 5, 6, 7]));


// create an IIFE that takes the length and width of an rectangle outputs it to the console as soon as the page loads

(function (length, width) {
    console.log('Length = ' + length + ' Width = ' + width + ' and Area is ' + length*width);
}) (10, 20); // Length = 10 Width = 20 and Area is 200

// Switch statement example

const d = new Date(2023, 4, 10, 19, 55, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
    case 1: 
    case 2: 
    case 3: 
        console.log('Boy it is cold out there! I despise winter season.');
        break;
    case 4: 
    case 5: 
    case 6:
        console.log('Look at all the flowers. I love spring!');
        break;
    case 7: 
    case 8: 
    case 9: 
        console.log('It is swimming time. Summer is the best.');
        break;
    default: 
        console.log('Let us go hiking and enjoy fall coloring.');
}

switch (true) {
    case hour < 12: 
        console.log('Good Morning!');
        break;
    case hour < 18: 
        console.log('Good Afternoon!');
        break;
    default: 
        console.log('Good Night.');
    }

// Create a calculator function that takes three parameters: num1, num2, and operator +, -, *, / and return the result. Otherwise, print an error

function calculator(num1, num2, operator) {
    switch (operator) {
        case '+': 
            return num1 + num2;
        case '-': 
            return num1 - num2;
        case '*': 
            return num1 * num2;
        case '/': 
            return num1 / num2;
        default: 
            return 'Invalid operator error';
    }
}

const num1 = 8;
const num2 = 5;
console.log(`${num1} + ${num2} = ${calculator(num1, num2, '+')}`); // 8 + 5 = 13
console.log(`${num1} - ${num2} = ${calculator(num1, num2, '-')}`); // 8 - 5 = 3    
console.log(`${num1} * ${num2} = ${calculator(num1, num2, '*')}`); // 8 * 5 = 40
console.log(`${num1} / ${num2} = ${calculator(num1, num2, '/')}`); // 8 / 5 = 1.6
console.log(`${num1} % ${num2} = ${calculator(num1, num2, '%')}`); // 8 % 5 = Invalid operator error

// Check if something is an empty object

const isEmptyObj = (obj) => {
    if (obj && Object.keys(obj).length > 0) {
        return false;
    } else {
        
        return true;
    }
}
let something = {name: 'Karen'};
if (isEmptyObj(something)) {
    console.log('\'something\' is empty');
} else {
    console.log('\'something\' is not empty');
}

// Some examples for logical operators
// && will return the first false value or the last value
console.log( 10 && 20); // 20
console.log( 10 && 20 && 30); // 30
console.log( 10 && 0 && 30); // 0
console.log( 10 && '' && 0 && 30); // ''

// || will return the first true value or the last value
console.log( 10 || 20); // 10
console.log( 0 || 20 || 30); // 20
console.log( 0 || null || '' || undefined); // undefined

// ?? returns the right side operand when the left is null or undefined
console.log( 10 ?? 20 ); // 10
console.log( null ?? 20); // 20
console.log( undefined ?? 20); // 20
console.log( 0 ?? 20); // 0

// ||= assigns the right side value only if the left is a false value
let a = 0;
console.log( a ||= 10); // 10
a = 10;
console.log( a ||= 10); // 10
a = 20;
console.log( a ||= 10); // 20

// &&= assigns the right side value only if the left is a true value
a = 0;
console.log( a &&= 10); // 0
a = 10;
console.log( a &&= 10); // 10
a = 20;
console.log( a &&= 10); // 10

// ??= assigns the right side value only if the left is null or undefined
a = null;
console.log( a ??= 10); // 10
a = undefined;
console.log( a ??= 10); // 10
a = 20;
console.log( a ??= 10); // 20

// use a ternary operator = simpler way of if statement
let age = 19;
age >= 18 ? console.log('You can vote') : console.log('You cannot vote');

const auth = true;

const redirect = auth 
    ? (alert('Welcome to My App'), '/myapp')
    : (alert('Access denied'), 'login');

// and you can do
auth && console.log('Welcome to My App'); // if auth === false, null

// loop thru an array
let names = [{name: 'John'}, {name: 'Sara'}, {name: 'Mary'}, {name: 'Tim'}, {name: 'Jason'}];
names.forEach( (n) => console.log(`Hello, my name is ${n.name}`));

// another way to loop thru array
for (const n of names) {
    console.log(`Hello my name is ${n.name}`);
}

// loop thru the map object
let m = new Map();
m.set('id', 1);
m.set('name', 'Jane Doe');
m.set('age', 33);
for (const [key, value] of m) {
    console.log(key, value);
}
// FizzBuzz challenge 3 = Fizz 5 = Buzz 3 && 5 = FizzBuzz
/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
*/

// loop thru an object
const fruitObj = {
    fruit1: 'apple',
    fruit2: 'orange',
    fruit3: 'pear',
    fruit4: 'peach',
};

for (const key in fruitObj) {
    console.log(key, fruitObj[key]);
}

// array filter method
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// find all the odd numbers
let oddNumbers = numbers.filter( element => element % 2 === 1);
console.log(oddNumbers);

// Challenge: get only the retail companies
const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2007},    
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2014},    
    { name: 'Company Four', category: 'Retail', start: 1967, end: 2008},
    { name: 'Company Five', category: 'Technology', start: 2001, end: 2003},
    { name: 'Company Six', category: 'Finance', start: 1977, end: 1988},
    { name: 'Company Seven', category: 'Auto', start: 1953, end: 2011},
    { name: 'Company Eight', category: 'Technology', start: 1997, end: 2001},
    { name: 'Company Nine', category: 'Retail', start: 1933, end: 2001},
];

let retailers = companies.filter (company => company.category === 'Retail');
console.log(retailers);

// Get companies that started in or after 1980 and ended in or before 2005
let results = companies.filter (company => company.start >= 1980 && company.end <= 2005 );
console.log(results);

// Get companies that lasted 10 years or more
results = companies.filter(company => company.end - company.start >= 10);
console.log(results);

// Map and array objects
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers2.map( (numbers2) => numbers2 * 2);
console.log(doubledNumbers);

// same with forEach
const doubledNumbers2 = [];
numbers2.forEach( (numbers2) => { doubledNumbers2.push(numbers2 * 2); });
console.log(doubledNumbers2);

// Create an array of company names
const companyNames = companies.map ((company) => company.name);
console.log(companyNames);

// Create an array of obj {companynames , category}
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category
    }
});

console.log(companyInfo);

// Create an array of objects with the names and length of each company in years

const companyYears = companies.map((company) => {
    return {
        name: company.name,
        years: company.end - company.start
    }
});
console.log(companyYears);

// Chain map methods
const squareAndDouble = numbers2.map((number) => Math.sqrt(number) * 2);
console.log(squareAndDouble);   

// chaining different methods with filter: find all the even numbers and double them
const evenDoubled = numbers
    .filter( (number) => number % 2 === 0)
    .map((number) => number * 2);

console.log(evenDoubled);

// Example of Array.reduce(). Take an array of numbers and reduce it to a total
const sumNumbers = numbers2.reduce((accumulator, currentValue) => { 
    return accumulator + currentValue;
}, 0); // 0 is initial value

console.log(sumNumbers);
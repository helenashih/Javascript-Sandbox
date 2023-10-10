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

const numbers = [23, 55, 88, 68, 93];

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




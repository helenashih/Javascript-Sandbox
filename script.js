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



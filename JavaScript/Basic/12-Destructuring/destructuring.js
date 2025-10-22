// 1. Array Destructuring
const arr = [1, 2, 3, 4];

// Basic

const [a, b] = arr; // a = 1, b = 2

// Skipping

const [, , c] = arr; // c = 3

// Default values

const [x, y, z = 10] = [1, 2]; // x = 1, y = 2, z = 10

// Rest operator

const [first, ...rest] = arr; // first = 1, rest = [2, 3, 4]

// Swapping variables

let p = 1;
let q = 2;
[p, q] = [q, p]; // p = 2, q = 1

// 2. Object Destructuring

const user = {
  name: "John",
  age: 35,
  city: "Delhi",
};

// Basic
const { name, age } = user; // name="John", age=35

// Renaming

const { name: username } = user; // username = "John"

// Default values

const { country = "India" } = user; // country="India"

// Nested object
const person = {
  name: "John",
  address: {
    city: "Delhi",
    zip: 110001,
  },
};

const {
  address: { city },
} = person; // city="Delhi"

// Rest operator

const { name1, ...rest1 } = user; // rest={age:25, city:"Delhi"}

// 3. Function Parameter Destructuring
function greet({ name, age }) {
  console.log(`Hi, I'm ${name} and I'm ${age}`);
}

greet({ name: "John", age: 25 }); // "Hi, I'm John and I'm 25"

// Array parameter
function sum([a, b]) {
  return a + b;
}
sum([10, 20]); // 30

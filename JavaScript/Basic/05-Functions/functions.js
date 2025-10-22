// 1. Function Declaration

console.log("add: ", add(2, 3));
function add(a, b) {
  return a + b;
}

// 2. Function Expression

// console.log("multiply: ", multiply(2, 3)); // ❌ Error: multiply is not a function
const multiply = function (a, b) {
  return a * b;
};

// console.log("sub: ", sub(2, 3)); // TypeError: sub is not a function
var sub = function () {
  return a - b;
};

// 3. Arrow Functions

const square = (x) => x * x;
console.log("square: ", square(4)); // 16

// 4. Default & Rest Parameters

function greet(name = "Guest") {
  return `Hello, ${name}`;
}
console.log("greet: ", greet()); // "Hello, Guest"

function sum(...nums) {
  return nums.reduce((a, b) => {
    return a + b;
  }, 0);
}
console.log("sum: ", sum(1, 2, 3)); // 6

// 5. Closures
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log("counter: ", counter());
console.log("counter: ", counter());

// 6. Hoisting

console.log("foo: ", foo()); // "Hello"
function foo() {
  return "Hello";
}

// console.log("bar: ", bar()); // TypeError
var bar = function () {
  return "Hi";
};

// 7. this behavior

const obj = {
  val: 42,
  regular: function () {
    console.log("this.val: ", this.val);
  },
  arrow: () => console.log("this.val: ", this.val),
};

obj.regular(); // 42
obj.arrow(); // undefined (this from outer/global scope)

// 8. IIFE

// (function(){
//     console.log("Runs immediately");
// })() // "Runs immediately"

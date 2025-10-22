// 1. Basic Lexical Scope

let x = 10;
function outer() {
  let y = 20;
  function inner() {
    console.log("x,y: ", x, y);
  }
  inner();
}

outer(); // 10 20

// 2. Scope Chain

let a = 1;
function first() {
  let b = 2;
  function second() {
    let c = 3;
    console.log("a, b, c", a, b, c);
  }
  second();
}

first(); // 1 2 3

// 3. Closures via Lexical Scope

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// 4. Block Scope with let and const

{
  let x = 100;
  const y = 200;
  var z = 300;
}

console.log("x: ", x);
console.log("y: ", y);
console.log("z: ", z);

// 5. Lexical Scope vs this

const obj = {
  value: 42,
  arrow: () => console.log("this.value: ", this.value),
  regular: function () {
    console.log(this.value);
  },
};
obj.arrow(); // undefined (lexical this)
obj.regular(); // 42 (called on obj)

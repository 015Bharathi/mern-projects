// 1. Global Context
// console.log("this: ", this); //  // window (browser)
// "use strict";
// console.log("this: ", this); // undefined

// 2. Regular vs Arrow Functions
function regular() {
  console.log("this: ", this);
}
regular(); // window (non-strict) or undefined (strict)

const arrow = () => console.log("this: ", this);
arrow(); // inherits from lexical scope

// 3. Object Method Context
const obj = {
  val: 42,
  show: function () {
    console.log("this.val: ", this.val);
  },
  arrowShow: () => console.log("this.val: ", this.val),
};
obj.show(); // 42
obj.arrowShow(); // undefined (lexical this from outer scope)

// 4. Class Context

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const p = new Person("John");
p.greet(); // "Hello, John"

// 5. Explicit Binding

function sayHi(age) {
  console.log(`${this.name}, ${age}`);
}

const user = {
  name: "John",
};

sayHi.call(user, 25);
sayHi.apply(user, [25]);
const bound = sayHi.bind(user);
bound(25);

// 6. Event Handlers

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log("this: ", this); // button element
});

btn.addEventListener("click", () => {
  console.log("this: ", this); // inherits from outer lexical scope
});

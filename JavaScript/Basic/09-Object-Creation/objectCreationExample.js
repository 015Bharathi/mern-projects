// 1. Object Literal

const person = {
  name: "John",
  age: "35",
};
console.log("person.name: ", person.name);

// 2. Using new Object()

const obj = new Object();
obj.name = "JS";
console.log("obj.name: ", obj.name);

// 3. Constructor Function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hi, I'm ${this.name}`;
};
const p1 = new Person("John", 35);
console.log("p1.greet: ", p1.greet()); // "Hi, I'm John"

// 4. ES6 Class

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hi, I'm ${this.name}`;
  }
}
const p2 = new Person1("JS", 30);
console.log("p2.greet(): ", p2.greet()); // "Hi, I'm JS"

// 5. Object.create()

const proto = {
  greet() {
    return `Hello!`;
  },
};

const obj1 = Object.create(proto);
console.log("obj1.greet: ", obj1.greet()); // "Hello"

// 6. Factory Function

function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hi, I'm ${this.name}`;
    },
  };
}

const p3 = createPerson("John", 35);
console.log("p3.greet: ", p3.greet()); // "Hi, I'm John"

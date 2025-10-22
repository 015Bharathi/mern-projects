// 1. Custom Methods

const person = {
  name: "John",
  greet: function () {
    return `Hello ${this.name}`;
  },
};

console.log("person.greet: ", person.greet());

// 2. Built-in Object Methods

const obj = {
  a: 1,
  b: 2,
};

console.log(Object.keys(obj)); // ["a","b"]
console.log(Object.values(obj)); // [1, 2]
console.log(Object.entries(obj)); // [["a", 1],["b", 2]]

const target = {};
Object.assign(target, obj);
console.log("target: ", target);

Object.freeze(obj);
obj.a = 10;
console.log("obj.a: ", obj.a);

// 3. Getter & Setter

const user = {
  firstName: "John",
  lastName: "M",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

console.log("user.fullName: ", user.fullName);
user.fullName = "Js Dev";
console.log("user.fullName: ", user.fullName);

// 4. Computed Property Names

const key = "score";
const player = {
  [key]: 100,
};

console.log("player: ", player.score); // 100
console.log("player: ", player["score"]); // 100

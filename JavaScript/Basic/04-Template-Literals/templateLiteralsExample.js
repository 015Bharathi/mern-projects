// 1. Basic Syntax & Interpolation
let name = "John";
let greeting = `Hello, ${name}!`;
console.log("greeting: ", greeting); // "Hello, John!"

// 2. Multi-line Strings

let message = ` This is line 1
This is line2
This is line3`;
console.log("message: ", message);

// 3. Expressions Inside ${}

let a = 10;
let b = 20;
console.log(`Sum: ${a + b}`); // "Sum: 30"
console.log(`Ternary: ${a > b ? "A is bigger" : "B is bigger"}`); // "B is bigger"

// 4. Tagged Template

function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    result + str + values[i] ? `**${values[i]}**` : "";
  }, "");
}

let value = "JS";
let lang = "ES6";
console.log(highlight`I love ${value} in ${lang}`); // "I love **JS** in **ES6**"

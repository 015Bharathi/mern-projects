// 1. Synchronous Callback

function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("John", sayBye);

// Hello John
// Bye!

// 2. Asynchronous Callback

console.log("Start");
setTimeout(() => {
  console.log("Async callback executed");
}, 1000);
console.log("End");

// "Start"
// "End"
// "Async callback executed"

// 3. Callback Hell Example

setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

// "Step 1"
// "Step 2"
// "Step 3"

// 4. Passing Parameters to Callbacks

function multiply(a, b, callback) {
  callback(a * b);
}
multiply(5, 10, (result) => console.log("result: ", result));

// result: 50

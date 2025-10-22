// 1. var, let, const differences

var a = 1;
var a = 2; // allowed
console.log(a);

let b = 1;
// let b = 2 // ❌ SyntaxError
b = 2; // allowed

const c = 1;
// const c = 2 // ❌ SyntaxError
// c = 2 // TypeError

// 2. Hoisting

console.log("x: ", x); // undefined (var is hoisted)
var x = 10;

console.log("y: ", y); // ❌ ReferenceError (TDZ)
let y = 20;

// 3. Scope

{
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log("a: ", a); // 1
// console.log("b: ", b); // ❌ ReferenceError
// console.log("c: ", c); // ❌ ReferenceError

// 7. Shadowing & Illegal Shadowing

let s = 10;

{
  let s = 20; // ✅ legal shadowing
  console.log("s: ", s); // 20
}

{
  //   var s = 10; // ❌ Illegal shadowing
  console.log("s: ", s);
}

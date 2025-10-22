// 1. Explicit Conversion

console.log(Number("42")); // 42
console.log(Number("42abc")); // NaN
console.log(String(100)); // "100"
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true

// 2. Implicit Conversion

console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log(1 + true); // 2
console.log(1 + false); // 1
console.log(2 * null); // 0

// 3. Loose vs Strict Equality

console.log(0 == false); // true
console.log(0 === false); // false
console.log(" " == 0); // true
console.log(null == undefined); // true
console.log(null === undefined); // false

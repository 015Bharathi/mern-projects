// 1. Primitive Types

let num = 42;
let str = "Hello";
let bool = true;
let undef;
let nul = null;
let sym = Symbol("id");
let big = 123456789012345678901234567890n;

console.log("typeof num: ", typeof num); // "number"
console.log("typeof str: ", typeof str); // "string"
console.log("typeof bool: ", typeof bool); // "boolean"
console.log("typeof undef: ", typeof undef); // "undefined"
console.log("typeof nul: ", typeof nul); // "object" (JS quirk)
console.log("typeof sym: ", typeof sym); // "symbol"
console.log("typeof big: ", typeof big); // "bigint"

// 2. Reference Types

let obj = { name: "JS" };
let arr = [1, 2, 3];
let func = () => "Hello";
let date = new Date();
let reg = /abc/;
let map = new Map();
let set = new Set();

console.log("typeof obj: ", typeof obj);
console.log("obj instanceof Object: ", obj instanceof Object);
console.log("typeof arr: ", typeof arr);
console.log("arr instanceof Array: ", arr instanceof Array);
console.log("typeof func: ", typeof func);
console.log("func instanceof Function: ", func instanceof Function);
console.log("typeof date: ", typeof date);
console.log("date instanceof Date: ", date instanceof Date);
console.log("typeof reg: ", typeof reg);
console.log("reg instanceof RegExp: ", reg instanceof RegExp);
console.log("typeof map: ", typeof map);
console.log("map instanceof Map: ", map instanceof Map);
console.log("typeof set: ", typeof set);
console.log("set instanceof Set: ", set instanceof Set);

// 3. Type Conversion

// Implicit

console.log("5" - 2); // 3
console.log("5" + 2); // "52"

// Explicit

console.log(Number("5") + 2); // 7
console.log(String(5) + 2); // "52"

// 4. Mutable vs Immutable

let str1 = "Hello";
str1[0] = "h";
console.log("str1: ", str1); // "Hello" (Immutable)

let arr1 = [1, 2, 3];
arr1[0] = 100;
console.log(arr1); // [100,2,3] (mutable)

// 1. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]

// Object spreading
const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = { ...obj1, c: 3 }; // {a:1, b:2, c:3}

// Function arguments

function sum(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(sum(nums)); // 6

// 2. Rest Operator
// Function parameters
function sumAll(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10

// Destructuring with rest

const arr = [1, 2, 3, 4];
const [first, ...rest] = arr;
console.log(first); // 1
console.log(rest); // [2,3,4]

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const { a, ...others } = obj;
console.log(a); // 1
console.log(others); // {b:2, c:3}

// 3. Copying & Merging Arrays/Objects

// Copying arrays
const arrCopy = [...arr]; // independent copy

// Merging arrays
const arr3 = [...arr1, ...arr2]; // [1,2,3,1,2,3,4,5]

// Merging objects
const mergedObj = { ...obj1, ...obj2 }; // {a:1, b:2, c:3}

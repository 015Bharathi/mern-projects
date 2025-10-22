// 1. Mutating vs Non-Mutating

let arr = [1, 2, 3];
arr.push(4); // [1,2,3,4] (mutates)

let arr2 = arr.map((x) => x * 2); // [2,4,6,8] (new array)

// 2. Iteration Methods

[1, 2, 3].forEach((x) => console.log("x: ", x)); // 1 2 3

const sqaured = [1, 2, 3].map((x) => x * x); // [1, 4, 9]

const even = [1, 2, 3, 4].filter((x) => x % 2 === 0); // [2, 4]

const sum = [1, 2, 3, 4].reduce((a, b) => a + b, 0); // 10

// 3. Searching Methods

const arr3 = [10, 20, 30];
console.log(arr3.find((x) => x > 15));
console.log(arr3.findIndex((x) => x > 15));
console.log(arr3.includes(20));

// 4. Sorting & Reversing
const arr4 = [3, 1, 2];
console.log(arr4.sort()); // [1,2,3]
console.log(arr4.sort((a, b) => b - a)); //  [3,2,1]
console.log(arr4.reverse()); //  [1,2,3]

// 5. Adding & Removing

const arr5 = [1, 2];
arr5.push(3); // [1, 2, 3]
arr5.pop(); // [1, 2]
arr5.unshift(0); // [0, 1, 2]
arr5.shift(); // [1, 2]
arr5.splice(1, 0, 5); // [1, 5, 2]
arr5.slice(1, 3); // [5, 2]

// 6. Other Useful Methods

[1, 2].concat([3, 4]); // [1,2,3,4]
[1, 2, 3].join("-"); // "1-2-3"
// [1, [2, 3]].flat() // [1,2,3]

[1, 2, 3, 4].some((x) => x > 3); // true
[1, 2, 3, 4].every((x) => x > 0); // true
[1, 2, 3, 4].fill(0); // [0, 0, 0]
[1, 2, 3, 4].copyWithin(1, 2); // [1,3,4,4]

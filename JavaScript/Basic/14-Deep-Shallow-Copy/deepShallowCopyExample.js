// 1. Shallow Copy

const obj = {
  a: 1,
  b: {
    c: 2,
  },
};
const shallowCopy = { ...obj };

shallowCopy.a = 10;
shallowCopy.b.c = 20;
console.log(obj.a); // 1
console.log(obj.b.c); // 20

const arr = [1, [2, 3]];
const arrCopy = [...arr];
arrCopy[0] = 10;
arrCopy[1][0] = 20;

console.log(arr); // [1, [20,3]] → nested array shared
console.log(arrCopy);

// 2. Deep Copy

const deepCopy = JSON.parse(JSON.stringify(obj));
deepCopy.b.c = 20;

console.log(obj.b.c); // 2

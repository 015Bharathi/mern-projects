// 1. Basic Closure

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log("counter: ", counter); // 1
console.log("counter: ", counter); // 2

// 2. Memoization

function memoize(fn) {
  let cache = {};
  return function (n) {
    if (cache[n] !== undefined) return cache[n];
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}

function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
}

const factorial = memoize(fact);
console.log(factorial(5));
console.log(factorial(5));

// 3. Data Privacy / Encapsulation

function createBankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
    withdraw: function (amount) {
      balance -= amount;
      return balance;
    },
    getBalance: function () {
      return balance;
    },
  };
}

const account = createBankAccount(1000);
console.log("account.deposit: ", account.deposit(500));
console.log("account.getBalance: ", account.getBalance());
console.log("account.withdraw: ", account.withdraw(500));

// 4. Event Handlers

function setupButton(buttonId) {
  let clickCount = 0;
  document.getElementById(buttonId).addEventListener("click", function () {
    clickCount++;
    console.log(`Clicked ${clickCount} times`);
  });
}
setupButton("myBtn");

// Closures with Loops (common pitfall)

// Incorrect with var

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("i: ", i), 1000);
} // 3 3 3

// Correct with let

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("i: ", i), 1000);
} //  0 1 2

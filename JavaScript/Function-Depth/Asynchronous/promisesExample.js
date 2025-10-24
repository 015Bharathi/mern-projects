// creating a Promise

const promise = new Promise((resolve, reject) => {
  const condition = true;
  const data = {
    name: "John",
    age: 53,
  };
  const error = {
    message: "Invalid Data....",
  };

  if (condition) {
    return reject(error);
  }

  return resolve(data);
});

// promise
//   .then(function (val) {
//     console.log(val);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// async / await

async function handlePromise() {
  try {
    const val = await promise;
    console.log(val);
  } catch (error) {
    console.log(error);
  }
}
// handlePromise();

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 sucess");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("p2 sucess");
  //   }, 1000);
  setTimeout(() => {
    reject("p2 fail");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 sucess");
  }, 2000);
});

// Promise.all

Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

// Promise.allSettled
Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

// Promise.race
Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

// Promise.any
Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

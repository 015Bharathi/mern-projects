// Throttle

function createThrottle(fn, delay) {
  let flag = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (!waitingArgs) {
      flag = false;
    } else {
      fn.apply(this, waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };
  return function (...args) {
    if (flag) {
      waitingArgs = args;
      return;
    }
    fn.apply(this, args);
    flag = true;
    setTimeout(timeoutFunc, delay);
  };
}

const handleInput = (event) => {
  console.log("value", event.target.value);
};

const throttle = createThrottle(handleInput, 1000);

// 1. Debounce

function createDebounce(cb, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(this, args);
    }, delay);
  };
}

const handleInput = (event) => {
  console.log("value", event.target.value);
};

const debounce = createDebounce(handleInput, 300);

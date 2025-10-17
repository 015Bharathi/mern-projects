import { useState } from "react";

const EventHandlingExample = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((preValue) => preValue + 1);
  }

  function decrement() {
    setCount((preValue) => {
      if (preValue === 0) return 0;
      return preValue - 1;
    });
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <div>{count}</div>
      <div className="flex gap-4">
        <button
          className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default EventHandlingExample;

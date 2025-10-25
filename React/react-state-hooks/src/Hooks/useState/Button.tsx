import { useState } from "react";

function Button() {
  let [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  return (
    <div className="flex justify-center bg-black text-white">
      <button onClick={add}>Click:</button>
    </div>
  );
}

export default Button;

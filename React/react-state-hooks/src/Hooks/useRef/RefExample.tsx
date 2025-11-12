import { useEffect, useRef, useState } from "react";

function RefExample() {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const prevName = useRef("");

  function focus() {
    inputRef.current?.focus();
  }

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      RefExample
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={focus}>focus</button>
      <div>
        {name} {prevName.current}
      </div>
    </div>
  );
}

export default RefExample;

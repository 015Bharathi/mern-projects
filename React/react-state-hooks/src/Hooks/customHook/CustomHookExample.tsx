import { useState } from "react";
import useDebounce from "./useDebounce";

function CustomHookExample() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);

  return (
    <div>
      CustomHookExample
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>{value}</div>
      <div>{debouncedValue}</div>
    </div>
  );
}

export default CustomHookExample;

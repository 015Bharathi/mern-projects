import { useState } from "react";

const ControlledFormsExample = () => {
  const [value, setValue] = useState("");
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
  }
  
  return (
    <div>
      <input type="text" value={value} onChange={handleInputChange} />
    </div>
  );
};

export default ControlledFormsExample;

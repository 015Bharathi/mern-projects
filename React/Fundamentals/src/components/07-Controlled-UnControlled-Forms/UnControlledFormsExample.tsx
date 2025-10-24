import { useRef } from "react";

const UnControlledFormsExample = () => {
  const inpRef = useRef<HTMLInputElement>(null);
  console.log(inpRef.current?.value);

  return (
    <div>
      <input type="text" ref={inpRef} />
    </div>
  );
};

export default UnControlledFormsExample;

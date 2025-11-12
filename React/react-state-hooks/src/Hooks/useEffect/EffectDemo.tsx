import { useEffect, useState } from "react";

const EffectDemo = () => {
  const [value, setValue] = useState("Posts");

  useEffect(() => {
    console.log("useEffect Run...");
  }, [value]);

  return (
    <div>
      <button onClick={() => setValue("Posts")}>Posts</button>
      <button onClick={() => setValue("Users")}>Users</button>
      <button onClick={() => setValue("Comments")}>Comments</button>
    </div>
  );
};

export default EffectDemo;

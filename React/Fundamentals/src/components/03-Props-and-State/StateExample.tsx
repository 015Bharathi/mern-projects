import React, { useState } from "react";

const StateExample: React.FC = () => {
  const [name, _] = useState("StateExample");
  return <div>{name}</div>;
};

export default StateExample;

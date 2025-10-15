import React from "react";

interface PropsExampleProps {
  name: string;
}

const PropsExample: React.FC<PropsExampleProps> = ({ name }) => {
  return <div>{name}</div>;
};

export default PropsExample;

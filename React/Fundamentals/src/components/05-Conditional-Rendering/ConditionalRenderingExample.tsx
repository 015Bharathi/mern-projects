const ConditionalRenderingExample = () => {
  return (
    <>
      <div>ConditionalRenderingExample</div>
      <If bool={true} />
      <Switch value="true" />
      <Ternary value={true} />
      <Logical value={true} />
    </>
  );
};

export default ConditionalRenderingExample;

interface IfProps {
  bool: boolean;
}

const If = ({ bool }: IfProps) => {
  if (bool) {
    return <div>True!</div>;
  }
  return <div>False!</div>;
};

interface SwitchProps {
  value: "true" | "false";
}

const Switch = ({ value }: SwitchProps) => {
  switch (value) {
    case "true":
      return <div>True!</div>;
    case "false":
      return <div>False!</div>;
    default:
      return <div>Unknown Value</div>;
  }
};

interface TernaryProps {
  value: boolean;
}

const Ternary = ({ value }: TernaryProps) => {
  return value ? <div>True!</div> : <div>False!</div>;
};

interface LogicalProps {
  value: boolean;
}

const Logical = ({ value }: LogicalProps) => {
  //   return value && <div>True!</div>;
  //   return value || <div>True!</div>;
  return value ?? <div>True!</div>;
};

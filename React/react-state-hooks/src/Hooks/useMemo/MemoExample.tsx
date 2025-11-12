import { useMemo, useState, memo } from "react";

function MemoExample() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [bool, setBool] = useState(false);

  function slowFunction(num: number): number {
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }

  const doubleNumber = useMemo(() => {
    return slowFunction(randomNumber);
  }, [randomNumber]);

  return (
    <div>
      MemoExample
      <div>{doubleNumber}</div>
      <button onClick={() => setRandomNumber(Math.random() * 100)}>
        doubleNumber
      </button>
      <div>{bool.toString()}</div>
      <button onClick={() => setBool(!bool)}>change boolean</button>
      <Button doubleNumber={doubleNumber} />
    </div>
  );
}

export default MemoExample;

interface ButtonProps {
  doubleNumber: number;
}

const Button = memo(({ doubleNumber }: ButtonProps) => {
  console.log("Button is Re-rendering");

  return <div>Button {doubleNumber}</div>;
});

import { memo, useCallback, useState } from "react";

function CallbackExample() {
  const [count, setCount] = useState(0);

  const handleSearch = useCallback((text: string) => {
    console.log("text: ", text);
  }, []);

  return (
    <div>
      CallbackExample
      <Search handleSearch={handleSearch} />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        click: {count}
      </button>
    </div>
  );
}

export default CallbackExample;

interface SearchProps {
  handleSearch: (text: string) => void;
}
const Search = memo(({ handleSearch }: SearchProps) => {
  console.log("render");

  return (
    <div>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
    </div>
  );
});

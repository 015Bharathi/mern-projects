import { useState } from "react";

// const array = ["item1", "item2", "item3"];
type ArrayItem = { id: number; item: string };

const array: ArrayItem[] = [
  { id: 1, item: "item1" },
  { id: 2, item: "item2" },
  { id: 3, item: "item3" },
];

const ListsAndKeysExample = () => {
  const [itemList, setItemList] = useState(array);

  function reverseSort() {
    setItemList([...itemList].reverse());
  }
  return (
    <>
      <div>ListsAndKeysExample</div>
      {itemList.map((item) => (
        <Item key={item.id} item={item.item} />
      ))}

      <button onClick={reverseSort}>Reverse Sort</button>
    </>
  );
};

export default ListsAndKeysExample;

const Item = ({ item }: { item: string }) => {
  const [value, setValue] = useState(item);

  return (
    <input
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

import { useState } from "react";
import TodoList from "./TodoList";

export interface TodoItem {
  id: number;
  item: string;
  complete: boolean;
}

const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState<TodoItem[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  function handleAddOrUpdateTask() {
    if (inputValue.trim() === "") return;

    if (editId !== null) {
      setTaskList((prev) => {
        return prev.map((task) => {
          return task.id === editId ? { ...task, item: inputValue } : task;
        });
      });
      setEditId(null);
    } else {
      setTaskList((prev) => [
        ...prev,
        { id: Date.now(), item: inputValue, complete: false },
      ]);
    }

    setInputValue("");
  }

  return (
    <>
      <div className="flex gap-5 items-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="add your tast"
          className="text-left font-semibold placeholder:text-black px-2 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none w-full"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddOrUpdateTask();
            }
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold text-3xl px-4 py-1 rounded-lg shadow"
          onClick={handleAddOrUpdateTask}
        >
          {editId ? "✔" : "+"}
        </button>
      </div>
      <div className="w-full p-5">
        <TodoList
          list={taskList}
          setTaskList={setTaskList}
          setInputValue={setInputValue}
          setEditId={setEditId}
        />
      </div>
    </>
  );
};

export default TodoInput;

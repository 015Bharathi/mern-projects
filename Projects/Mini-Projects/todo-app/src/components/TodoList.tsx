import type React from "react";

interface TodoItem {
  id: number;
  item: string;
  complete: boolean;
}

interface TodoListProps {
  list: TodoItem[];
  setTaskList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setEditId: React.Dispatch<React.SetStateAction<number | null>>;
}

const TodoList = ({
  list,
  setTaskList,
  setInputValue,
  setEditId,
}: TodoListProps) => {
  const handleEdit = (item: TodoItem) => {
    setInputValue(item.item);
    setEditId(item.id);
  };
  const handleDelete = (id: number) => {
    setTaskList((prev) => prev.filter((t) => t.id !== id));
  };

  function toggleComplete(id: number) {
    setTaskList((prev) =>
      prev.map((t) => (t.id === id ? { ...t, complete: !t.complete } : t))
    );
  }

  return (
    <ul>
      {list.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center p-3 border rounded bg-gray-800 text-white"
        >
          <div className="flex items-center gap-3 flex-1">
            <input
              type="checkbox"
              checked={task.complete}
              onChange={() => toggleComplete(task.id)}
              className="w-5 h-5"
            />
            <span className={task.complete ? "line-through text-gray-400" : ""}>
              {task.item}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleEdit(task)}
              disabled={task.complete}
              className={`px-3 py-1 ${
                task.complete ? "bg-gray-50 text-gray-500" : "bg-blue-600 hover:bg-blue-700"
              } rounded `}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(task.id)}
              className="px-3 py-1 bg-red-600 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

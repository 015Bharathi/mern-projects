import TodoInput from "./components/TodoInput";

function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="flex flex-col max-w-xl justify-center items-center rounded=lg shadow-sm shadow-white border border-solid border-blue-800 w-full pb-5">
          <h1 className="text-xl font-semibold p-5 text-white">My Todo List</h1>
          <TodoInput />
        </div>
      </div>
    </>
  );
}

export default App;

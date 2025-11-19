import PostCard from "./components/compound/PostCard";

function App() {
  return (
    <>
      <h1 className="bg-blue-900 text-blue-900">
        Component Design And Patterns
      </h1>
      <PostCard
        post={{
          id: 1,
          title: "Hello World!",
          content: "This is the first post on our new blog",
          user: {
            id: 1,
            name: "John Doe",
          },
        }}
      >
        <PostCard.Title />
        <PostCard.Content />
        <PostCard.User />
      </PostCard>
    </>
  );
}

export default App;

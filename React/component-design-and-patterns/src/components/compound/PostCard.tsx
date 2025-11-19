import { createContext, useContext, type PropsWithChildren } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    name: string;
  };
}

interface PostCardProps {
  post: Post;
}

interface PostCardContext {
  post: Post;
}

const PostCardContext = createContext<PostCardContext | undefined>(undefined);

const usePostCardContext = () => {
  const context = useContext(PostCardContext);
  if (!context) {
    throw new Error("usePostCardContext must be used within a PostCard");
  }
  return context;
};

const PostCard = ({ children, post }: PropsWithChildren<PostCardProps>) => {
  return (
    <>
      <PostCardContext.Provider value={{ post }}>
        {children}
      </PostCardContext.Provider>
    </>
  );
};

export default PostCard;

PostCard.Title = function PostCardTitle() {
  const { post } = usePostCardContext();
  return <div>{post.title}</div>;
};

PostCard.Content = function PostCardContent() {
  const { post } = usePostCardContext();
  return <div>{post.content}</div>;
};

PostCard.User = function PostCardUser() {
  const { post } = usePostCardContext();
  return <div>{post.user.name}</div>;
};

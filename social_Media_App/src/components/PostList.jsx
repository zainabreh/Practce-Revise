import React, { useContext } from "react";
import Post from "./Post";
import { PostProvider } from "../store/PostContextProvider";

function PostList() {
  const { initpost } = useContext(PostProvider);
  
  return (
    <>
      {initpost.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;

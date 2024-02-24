import React, { useContext } from "react";
import Post from "./Post";
import { PostProvider } from "../store/PostContextProvider";
import WelcomeMessage from "./WelcomeMessage";
import Loader from "./Loader";

function PostList() {
  const { initpost, loader } = useContext(PostProvider);
 

  return (
    <>
      {loader && <Loader/>}
      {!loader && initpost.length === 0 && <WelcomeMessage />}
      {!loader && initpost.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;

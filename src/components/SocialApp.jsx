import React from "react";
import MainContainer from "./MainContainer/MainContainer";
import Input from "./Input/Input";
import PostCardcontext from "../providers/PostsProvider";
import useFetchPosts from "../hooks/useFetchPosts";

const SocialApp = () => {
  const [posts, setPosts] = useFetchPosts();
  return (
    <div>
      <PostCardcontext.Provider value={{ posts, setPosts }}>
        <Input />
        <MainContainer />
      </PostCardcontext.Provider>
    </div>
  );
};

export default SocialApp;

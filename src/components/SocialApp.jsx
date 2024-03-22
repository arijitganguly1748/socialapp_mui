import React, { useState, useEffect } from "react";
import MainContainer from "./MainContainer/MainContainer";
import Input from "./Input/Input";
import PostCardcontext from "../providers/PostsProvider";
import axios from "axios";

const SocialApp = () => {
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    try {
      const response = await axios.get("https://dummyapi.io/data/v1/post", {
        headers: { "app-id": import.meta.env.VITE_APP_ID },
      });
      const responseObj = response.data;
      setPosts([...responseObj.data]);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPost();
  }, []);
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

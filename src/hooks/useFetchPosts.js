import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetchPosts = () => {
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

  return [posts, setPosts];
}

export default useFetchPosts;
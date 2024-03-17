import { useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";
import Loader from "../Loader/Loader";

const PostCardList = () => {
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
  return posts.length == 0 ? (
    <Loader />
  ) : (
    posts.map((post) => {
      return (
        <PostCard
          key={post.id}
          firstName={post.owner.firstName}
          lastName={post.owner.lastName}
          image={post.image}
          content={post.text}
        />
      );
    })
  );
};

export default PostCardList;

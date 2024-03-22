import axios from "axios";
import { useContext, useState } from "react";
import PostCardcontext from "../providers/PostsProvider";

const useCreatePost = () => {
  const [postText, setPostText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { posts, setPosts } = useContext(PostCardcontext);

  const createPost = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://dummyapi.io/data/v1/post/create",
        {
          owner: "60d0fe4f5311236168a109ca",
          text: postText,
          image: imageUrl,
          likes: 0,
          publishDate: new Date(),
        },
        {
          headers: { "app-id": import.meta.env.VITE_APP_ID },
        }
      );
      setLoading(false);
      setPosts([response.data, ...posts]);
      setPostText("");
      setImageUrl("");
    } catch (error) {}
  };

  return [createPost, postText, setPostText, imageUrl, setImageUrl, loading];
};

export default useCreatePost;

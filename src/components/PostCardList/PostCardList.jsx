import { useContext } from "react";
import PostCard from "../PostCard";
import Loader from "../Loader/Loader";

import PostCardcontext from "../../providers/PostsProvider";

const PostCardList = () => {
  const { posts } = useContext(PostCardcontext);

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

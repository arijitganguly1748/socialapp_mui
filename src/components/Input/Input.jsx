import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";

const Input = () => {
  const [postText, setPostText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

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
      setPostText("");
      setImageUrl("");
    } catch (error) {}
  };

  return (
    <Box sx={{ mt: "1rem", ml: "0.2rem" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Your next post..."
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        variant="outlined"
      />
      <TextField
        sx={{ mt: "1rem", mb: "1rem" }}
        fullWidth
        id="outlined-basic"
        label="Image for your post..."
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        variant="outlined"
      />
      {!loading ? (
        <Button variant="contained" onClick={createPost}>
          Submit
        </Button>
      ) : (
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
      )}
    </Box>
  );
};

export default Input;

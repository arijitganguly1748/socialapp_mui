import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import useCreatePost from "../../hooks/useCreatePost";

const Input = () => {
  const [createPost, postText, setPostText, imageUrl, setImageUrl, loading] = useCreatePost();

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

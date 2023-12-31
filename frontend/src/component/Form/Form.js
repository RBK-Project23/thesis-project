import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const theme = useTheme();

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
    } else {
      dispatch(updatePost(currentId, postData));
    }
    clear();
  };

  return (
    <Paper
      elevation={6}
      sx={{
        padding: (theme) => theme.spacing(2),
        marginBottom: (theme) => theme.spacing(2),
      }}
    >
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& .MuiTextField-root": {
            margin: (theme) => theme.spacing(1),
          },
        }}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${post?.title}"` : "Creating a Events"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Admin"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (comma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <Box sx={{ width: "97%", margin: "10px 0" }}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </Box>
        <Button
          sx={{
            marginBottom: 2,
            backgroundColor: "#EF5257",
            color: "white",
            "&:hover": {
              backgroundColor: theme.palette.augmentColor({
                color: { main: "#EF5257" },
                mainShade: "dark",
              }).dark,
            },
          }}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#B0BEC5", 
            color: "white",
            "&:hover": {
              backgroundColor: "#90A4AE", 
            },
          }}
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

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
import { useParams } from "react-router-dom";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const theme = useTheme();
  const { id } = useParams();

  const post = useSelector((state) =>
    id ? state.posts.find((p) => p._id === id) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
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

    if (!id) {
      dispatch(createPost(postData));
    } else {
      dispatch(updatePost(id, postData));
    }
    clear();
  };
  return (
    <Paper
      elevation={6}
      sx={{
        padding: (theme) => theme.spacing(2),
        marginTop: (theme) => theme.spacing(5),
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "700px",
        borderRadius: "15px",
      }}
    >
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: (theme) => theme.spacing(3),
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "24px",
            textAlign: "center",
            marginBottom: (theme) => theme.spacing(3),
          }}
        >
          {id ? `Editing "${post?.title}"` : "Create Event"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Name Author"
          fullWidth
          sx={{
            margin: (theme) => theme.spacing(1),
          }}
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
          sx={{
            margin: (theme) => theme.spacing(1),
          }}
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
          sx={{
            margin: (theme) => theme.spacing(1),
          }}
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
          sx={{
            margin: (theme) => theme.spacing(1),
          }}
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
              transform: "scale(1.02)",
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            },
            padding: "10px",
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

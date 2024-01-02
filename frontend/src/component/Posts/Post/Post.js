import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material/";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import { likePost, deletePost } from "../../../actions/posts";
import { Link } from "react-router-dom";

const Post = ({ post, setCurrentId, showActions = true }) => {
  const dispatch = useDispatch();

  const truncateText = (text, limit) => {
    const words = text.split(" ", limit);
    return words.length >= limit ? `${words.join(" ")}...` : text;
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        position: "relative",
        margin: "auto",
        marginBottom: 2,
      }}
    >
      <CardMedia
        component="img"
        image={post.selectedFile || "defaultImageURL"}
        alt={post.title}
        sx={{
          height: 194,
        }}
      />
      <Box sx={{ padding: "0 16px", flexGrow: 1 }}>
        {" "}
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            left: "20px",
            color: "white",
          }}
        >
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
            color: "white",
          }}
        >
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </Box>
        <Typography gutterBottom variant="h5" component="h2">
          <Link
            to={`/events/${post._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {post.title}
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {truncateText(post.message, 50)}
        </Typography>
      </Box>
      {showActions && (
        <CardActions
          sx={{
            padding: "0 16px 8px 16px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(likePost(post._id))}
          >
            <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default Post;

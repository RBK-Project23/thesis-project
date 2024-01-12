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
import EditIcon from "@mui/icons-material/Edit";
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
        marginBottom: 3,
        marginRight:3
       
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
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{
            fontSize: "1.7rem",
            fontWeight: "bold",
            color: "#010911",
          }}
        >
          <Link
            to={`/events/${post._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {post.title}
          </Link>
        </Typography>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2" color="textSecondary">
          {moment(post.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontSize: "1.2rem" }}
        >
          {truncateText(post.message, 30)}
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
            onClick={() => setCurrentId(post._id)}
          >
            <EditIcon fontSize="small" /> Edit
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

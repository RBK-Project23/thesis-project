import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@mui/material/';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '15px',
      height: '100%',
      position: 'relative',
    }}>
      <CardMedia
        sx={{
          height: 0,
          paddingTop: '56.25%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundBlendMode: 'darken',
        }}
        image={post.selectedFile || 'defaultImageURL'}
        title={post.title}
      />
      <Box sx={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
      }}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </Box>
      <Box sx={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
      }}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
      }}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </Box>
      <Typography gutterBottom variant="h5" component="h2" sx={{ padding: '0 16px' }}>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions sx={{
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;

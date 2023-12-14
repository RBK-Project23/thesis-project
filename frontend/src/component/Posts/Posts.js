import React from 'react';
import { Grid, CircularProgress, Box } from '@mui/material';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={6} sx={{ margin: (theme) => theme.spacing(1) }}>
              <Post post={post} setCurrentId={setCurrentId} sx={{ textAlign: 'center' }} />
            </Grid>
          ))}
        </Grid>
      </Box>
    )
  );
};

export default Posts;

import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
    alert('Event created successfully.');
  } catch (error) {
    console.log(error.message);
    alert('Error creating event.');
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
    alert('Event updated successfully.');
  } catch (error) {
    console.log(error.message);
    alert(`Error updating event.`);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  const userConfirmed = window.confirm("Are you sure you want to delete this event?");

  if (userConfirmed) {
    try {
      await api.deletePost(id);
      dispatch({ type: DELETE, payload: id });
      alert('Event deleted successfully.');
    } catch (error) {
      console.log(error.message);
      alert(`Error deleting event`);
    }
  } else {
    
    alert('Event deletion cancelled.');
  }
};

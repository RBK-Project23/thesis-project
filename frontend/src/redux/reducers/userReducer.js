// addUserAction.js
import * as types from './UserTypes';

// Action to add a new user
export const addUser = (newUser) => ({
  type: types.ADD_USER,
  payload: newUser,
});

// Action to handle errors during user-related actions
export const addUserError = (error) => ({
  type: types.ADD_USER_ERROR,
  payload: error,
});


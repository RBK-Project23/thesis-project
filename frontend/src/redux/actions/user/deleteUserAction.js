// deleteUserAction.js
import * as types from './UserTypes';

// Action to delete a user
export const deleteUser = (userId) => ({
  type: types.DELETE_USER,
  payload: userId,
});


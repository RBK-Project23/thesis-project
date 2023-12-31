import axios from "axios";

// events
const url = "http://localhost:7000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const fetchPost = (id) => axios.get(`${url}/${id}`);

// scouts programs
const scoutProgramsUrl = "http://localhost:7000/scoutPrograms";

export const fetchScoutPrograms = () => axios.get(scoutProgramsUrl);
export const createScoutProgram = (newScoutProgram) =>
  axios.post(scoutProgramsUrl, newScoutProgram);
export const updateScoutProgram = (id, updatedScoutProgram) =>
  axios.patch(`${scoutProgramsUrl}/${id}`, updatedScoutProgram);
export const deleteScoutProgram = (id) =>
  axios.delete(`${scoutProgramsUrl}/${id}`);

export const fetchScoutProgram = (id) => axios.get(`${scoutProgramsUrl}/${id}`);

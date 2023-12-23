const mongoose = require('mongoose');
const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createPost = async (req, res) => {
  const newPost = new Post(req.body);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(409).json({ message: error.message });
  }
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post with id: ${id}`);
  }

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
  await Post.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post with id: ${id}`);
  }

  await Post.findByIdAndDelete(id);
  res.json({ message: "Post deleted successfully." });
};

exports.likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post with id: ${id}`);
  }

  const post = await Post.findById(id);
  const updatedPost = await Post.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

  res.json(updatedPost);
};

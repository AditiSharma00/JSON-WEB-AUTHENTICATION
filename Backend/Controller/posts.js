const express = require("express");
const router = express.Router();
const verify = require("../middleware/privateRoute");
//post Model
const Posts = require("../Model/Posts");
//function for get api
const getPosts = async (req, res) => {
  try {
    const post = await Posts.find();
    if (!post) throw Error("no items");
    res.status(200).json(post);
    // res.send(post);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
//function for Posts api
const Postposts = async (req, res) => {
  const newPost = new Posts(req.body);
  try {
    const post = await newPost.save();
    if (!post) throw Error("something went wrong while saving the post");
    res.status(200).json(post);
    // res.send(post);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
//function for delete post
const deleteById = async (req, res) => {
  try {
    const post = await Posts.findByIdAndDelete(req.params.id);
    if (!post) throw Error("something went wrong while deleting the post");
    res.status(200).json({ success: true });
    // res.send(post);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
//function for update
const updateById = async (req, res) => {
  try {
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
    if (!post) throw Error("something went wrong while updating the post");
    res.status(200).json({ success: true });
    // res.send(post);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
//function for get by id
const getById = async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post) throw Error("no items");
    res.status(200).json(post);
    // res.send(post);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

module.exports = {
  getPosts,
  Postposts,
  deleteById,
  updateById,
  getById,
};

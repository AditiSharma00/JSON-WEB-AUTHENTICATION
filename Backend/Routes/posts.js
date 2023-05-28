const express = require("express");
const router = express.Router();
const verify = require("../middleware/privateRoute");
//post Model
const Posts = require("../Model/Posts");
//routes for get api
router.get("/", verify, async (req, res) => {
  try {
    const post = await Posts.find();
    if (!post) throw Error("no items");
    res.status(200).json(post);
    // res.send(post);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});
//routes for Posts api
router.post("/", verify, async (req, res) => {
  const newPost = new Posts(req.body);
  try {
    const post = await newPost.save();
    if (!post) throw Error("something went wrong while saving the post");
    res.status(200).json(post);
    // res.send(post);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});
//routes for delete post
router.delete("/:id", verify, async (req, res) => {
  try {
    const post = await Posts.findByIdAndDelete(req.params.id);
    if (!post) throw Error("something went wrong while deleting the post");
    res.status(200).json({ success: true });
    // res.send(post);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});
//routes for update
router.patch("/:id", verify, async (req, res) => {
  try {
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
    if (!post) throw Error("something went wrong while updating the post");
    res.status(200).json({ success: true });
    // res.send(post);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});
//get by id
router.get("/:id", verify, async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post) throw Error("no items");
    res.status(200).json(post);
    // res.send(post);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

module.exports = router;

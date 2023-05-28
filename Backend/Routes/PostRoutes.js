const express = require("express");
const router = express.Router();
const verify = require("../middleware/privateRoute");
//post Model
const {
  getPosts,
  Postposts,
  deleteById,
  updateById,
  getById,
} = require("../Controller/posts");
//function for get api
router.get("/", verify, getPosts);
//function for Posts api
router.post("/", verify, Postposts);
//function for delete post
router.delete("/:id", verify, deleteById);
//function for update
router.patch("/:id", verify, updateById);
//function for get by id
router.get("/:id", verify, getById);

module.exports = router

const express = require("express");
const router = express.Router();

const { createComment } = require("../controllers/commentController");
const { createPost, getAllPosts, updatePost, deletePost } = require("../controllers/postController");
const { likePost, unlikePost } = require("../controllers/likeController");

router.post("/comments/create", createComment);
// router.post("/posts/create", createPost);
// router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);


router.post("/createPost",createPost );
router.put("/updatePost/:id", updatePost);
router.get("/getAllPosts", getAllPosts);
router.delete("/deletePost/:id", deletePost);


module.exports= router; 







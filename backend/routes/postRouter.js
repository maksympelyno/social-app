import express from "express";

import { jwtVerify } from "../middleware/jwtVerify.js";
import {
  createPost,
  deletePost,
  commentOnPost,
  likePost,
  getAllPosts,
  getLikedPostsByUser,
  getFollowingPosts,
  getUserPosts,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/all", jwtVerify, getAllPosts);
router.get("/likes/:id", jwtVerify, getLikedPostsByUser);
router.get("/following", jwtVerify, getFollowingPosts);
router.get("/user/:username", jwtVerify, getUserPosts);

router.post("/create", jwtVerify, createPost);
router.post("/like/:id", jwtVerify, likePost);
router.post("/comment/:id", jwtVerify, commentOnPost);
router.delete("/:id", jwtVerify, deletePost);

export default router;

import express from "express";

import { jwtVerify } from "../middleware/jwtVerify.js";
import { getUserProfile, getSuggestedUsers, followUser, updateUserInfo } from "../controllers/userController.js";

const router = express.Router();

router.get("/profile/:username", jwtVerify, getUserProfile);
router.get("/suggested", jwtVerify, getSuggestedUsers);
router.post("/follow/:id", jwtVerify, followUser);
router.post("/update", jwtVerify, updateUserInfo);

export default router;

import express from "express";

import { jwtVerify } from "../middleware/jwtVerify.js";
import { getMe, signup, login, logout } from "../controllers/authController.js";

const router = express.Router();

router.get("/me", jwtVerify, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;

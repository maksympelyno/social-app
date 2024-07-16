import express from "express";
import { jwtVerify } from "../middleware/jwtVerify.js";
import { deleteNotifications, getNotifications } from "../controllers/notificationController.js";

const router = express.Router();

router.get("/", jwtVerify, getNotifications);
router.delete("/", jwtVerify, deleteNotifications);

export default router;

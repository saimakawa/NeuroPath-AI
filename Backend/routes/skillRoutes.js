import express from "express";
import { addSkill, getSkills } from "../controllers/skillController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addSkill);
router.get("/", protect, getSkills);

export default router;

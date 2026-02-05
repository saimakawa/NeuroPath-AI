import express from "express";
import { addIdea, getIdeas } from "../controllers/ideaController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addIdea);
router.get("/", protect, getIdeas);

export default router;

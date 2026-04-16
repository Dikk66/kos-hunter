import express from "express";
import {
  createKos,
  getKos,
  updateKos,
  deleteKos,
} from "../controllers/kosController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createKos);
router.get("/", getKos);
router.put("/:id", authMiddleware, updateKos);
router.delete("/:id", authMiddleware, deleteKos);

export default router;
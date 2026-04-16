import express from "express";
import {
  createBooking,
  getMyBooking,
  updateBookingStatus,
} from "../controllers/bookingController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createBooking);
router.get("/me", authMiddleware, getMyBooking);
router.put("/:id", authMiddleware, updateBookingStatus);

export default router;
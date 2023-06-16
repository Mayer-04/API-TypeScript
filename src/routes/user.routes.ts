import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserId, updateUser } from "../controllers/user.controller";

const router = Router();

// http://localhost:5000/user
router.get("/user", getAllUsers);
router.get("/user/:id", getUserId);
router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
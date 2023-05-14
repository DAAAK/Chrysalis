import { Router } from "express";
import usersController from "./user.controller";

const router = Router();

router.post("/register", usersController.sendVerificationEmail);
router.post("/verify/:token", usersController.handleVerificationLink);
router.post("/login", usersController.login);
router.get("/check", usersController.checkLoginStatus);
router.post("/logout", usersController.logout);

export default router;

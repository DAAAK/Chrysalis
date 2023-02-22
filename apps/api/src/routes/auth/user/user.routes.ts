import { Router } from "express";
import usersController from "./user.controller";

const router = Router();

router.post("/register", usersController.register);

router.post("/login", usersController.login);

export default router;

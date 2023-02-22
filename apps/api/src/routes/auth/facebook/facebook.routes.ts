import { Router } from "express";
import facebookController from "./facebook.controller";

const router = Router();

router.post("/register", facebookController.register);

router.post("/login", facebookController.login);

export default router;

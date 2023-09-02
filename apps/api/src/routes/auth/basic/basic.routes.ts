import { Router } from 'express';
import usersController from './basic.controller';

const router = Router();

router.post('/login', usersController.sendVerificationEmail);
router.post('/verify/:token', usersController.handleVerificationLink);
router.post('/logout', usersController.logout);

export default router;

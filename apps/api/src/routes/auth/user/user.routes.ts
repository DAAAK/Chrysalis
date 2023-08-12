import { Router } from 'express';
import usersController from './user.controller';
import { verifyToken } from '../../../tools';

const router = Router();

router.post('/register', usersController.sendVerificationEmail);
router.post('/verify/:token', usersController.handleVerificationLink);
router.post('/login', usersController.login);
router.get('/user', usersController.getConnectedUser);
router.post('/logout', usersController.logout);

export default router;

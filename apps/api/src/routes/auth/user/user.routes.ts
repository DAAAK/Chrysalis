import { Router } from 'express';
import usersController from './user.controller';
import { verifyToken } from '../../../tools';

const router = Router();

router.post('/login', usersController.sendVerificationEmail);
router.post('/verify/:token', usersController.handleVerificationLink);
router.get('/user', usersController.getConnectedUser);
router.put('/role', usersController.chooseRole);
router.post('/logout', usersController.logout);

export default router;

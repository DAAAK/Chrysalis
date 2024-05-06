import { Router } from 'express';
import usersController from './basic.controller';
import { verifyToken } from '../../../tools';

const router = Router();

router.post('/login', usersController.sendVerificationEmail);
router.post(
  '/verify/:token',
  verifyToken,
  usersController.handleVerificationLink
);
router.post('/logout', usersController.logout);

export default router;

import { Router } from 'express';
import {authController} from '../../../controllers/controllers';
import { verifyToken } from '../../../tools';

const router = Router();

router.post('/login', authController.linkController.sendVerificationEmail);
router.post(
  '/verify/:token',
  verifyToken,
    authController.linkController.handleVerificationLink
);
router.post('/logout', authController.linkController.logout);

export default router;

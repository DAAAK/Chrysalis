import { Router } from 'express';
import usersController from './user.controller';
import { verifyToken } from '../../tools';

const router = Router();

router.get('/user', verifyToken, usersController.getConnectedUser);
router.post('/role', verifyToken, usersController.chooseRole);

export default router;

import { Router } from 'express';
import usersController from './user.controller';

const router = Router();

router.get('/user', usersController.getConnectedUser);
router.post('/role', usersController.chooseRole);

export default router;

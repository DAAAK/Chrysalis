import { Router } from 'express';
import { userController } from '../../controllers/controllers';
import { verifyToken } from '../../tools';

const router = Router();

router.get('/user', verifyToken, userController.getConnectedUser);
router.post('/role', verifyToken, userController.chooseRole);

export default router;

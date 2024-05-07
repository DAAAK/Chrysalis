import { Router } from 'express';
import { authController } from '../../../controllers/controllers';

const router = Router();

router.post('/login', authController.googleController.login);
router.get('/callback', authController.googleController.callback);

export default router;

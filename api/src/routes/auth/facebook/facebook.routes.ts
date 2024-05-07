import { Router } from 'express';
import { authController } from '../../../controllers/controllers';

const router = Router();

router.post('/login', authController.facebookController.login);
router.get('/callback', authController.facebookController.callback);

export default router;

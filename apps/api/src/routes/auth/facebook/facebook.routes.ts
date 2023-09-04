import { Router } from 'express';
import facebookController from './facebook.controller';

const router = Router();

router.post('/login', facebookController.login);
router.get('/callback', facebookController.callback);
router.get('/logout', facebookController.logout);

export default router;

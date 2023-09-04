import { Router } from 'express';
import googleController from './google.controller';

const router = Router();

router.post('/login', googleController.login);
router.get('/callback', googleController.callback);
router.get('/logout', googleController.logout);

export default router;

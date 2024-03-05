import { Router } from 'express';
import contactController from './contact.controller';
import { verifyToken } from '../../tools';

const router = Router();

router.post('/send', verifyToken, contactController.sendEmail);

export default router;

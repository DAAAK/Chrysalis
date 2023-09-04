import { Router } from 'express';
import contactController from './contact.controller';

const router = Router();

router.post('/send', contactController.sendEmail);

export default router;

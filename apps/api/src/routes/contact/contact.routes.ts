import { Router } from 'express';
import { contactController } from '../../controllers/controllers';
import { verifyToken } from '../../tools';

const router = Router();

router.post('/send', verifyToken, contactController.sendEmail);

export default router;

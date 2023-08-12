import { Router } from 'express';
import facebookController from './facebook.controller';

const router = Router();

// TODO: Re create the correct routes for each requests

router.post('/register');
router.post('/login');

export default router;

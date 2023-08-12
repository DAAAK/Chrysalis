import express, { Router } from 'express';
import authRoutes from './auth/auth.routes';

const routes = Router();

routes.use(express.json());
routes.use('/auth', authRoutes);

export default routes;

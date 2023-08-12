import express, { Router } from 'express';
import userRoutes from './user/user.routes';
import googleRoutes from './google/google.routes';
import facebookRoutes from './facebook/facebook.routes';

const routes = Router();

routes.use(express.json());

routes.use('/user', userRoutes);
routes.use('/google', googleRoutes);
routes.use('/facebook', facebookRoutes);

export default routes;

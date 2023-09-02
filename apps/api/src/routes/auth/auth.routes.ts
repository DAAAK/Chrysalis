import express, { Router } from 'express';
import basicRoutes from './basic/basic.routes';
import googleRoutes from './google/google.routes';
import facebookRoutes from './facebook/facebook.routes';

const routes = Router();

routes.use(express.json());

routes.use('/basic', basicRoutes);
routes.use('/google', googleRoutes);
routes.use('/facebook', facebookRoutes);

export default routes;

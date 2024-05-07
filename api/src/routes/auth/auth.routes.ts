import express, { Router } from 'express';
import linkRoutes from './link/link.routes';
import googleRoutes from './google/google.routes';
import facebookRoutes from './facebook/facebook.routes';

const routes = Router();

routes.use(express.json());

routes.use('/link', linkRoutes);
routes.use('/google', googleRoutes);
routes.use('/facebook', facebookRoutes);

export default routes;

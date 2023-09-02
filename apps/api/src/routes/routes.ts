import express, { Router } from 'express';
import authRoutes from './auth/auth.routes';
import contactRoutes from './contact/contact.routes';
import userRoutes from './user/user.routes';
import reservationRoutes from './reservation/reservation.routes';

const routes = Router();

routes.use(express.json());
routes.use('/auth', authRoutes);

routes.use('/reservation', reservationRoutes);
routes.use('/user', userRoutes);

routes.use('/contact', contactRoutes);

export default routes;

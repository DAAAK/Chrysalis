import express, { Router } from 'express';
import authRoutes from './auth/auth.routes';
import contactRoutes from './contact/contact.routes';
import userRoutes from './user/user.routes';
import bookingRoutes from './booking/booking.routes';

const routes = Router();

routes.use(express.json());
routes.use('/auth', authRoutes);

routes.use('/reservation', bookingRoutes);
routes.use('/user', userRoutes);

routes.use('/contact', contactRoutes);

export default routes;

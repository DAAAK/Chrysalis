import nodemailer from 'nodemailer';
import { Request, Response } from 'express';

import { userModel } from '../../models';
import { env } from '../../tools';
import jwt from 'jsonwebtoken';

export default class bookingController {
  public static async isReserved(req: Request, res: Response) {}
  public static async reserveDate(req: Request, res: Response) {}
  public static async editReservation(req: Request, res: Response) {}
  public static async cancelReservation(req: Request, res: Response) {}
}

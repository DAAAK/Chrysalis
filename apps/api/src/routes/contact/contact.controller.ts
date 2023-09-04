import nodemailer from 'nodemailer';
import { Request, Response } from 'express';
import { env } from '../../tools';
import jwt from 'jsonwebtoken';
import { userModel } from '../../models';

export default class contactController {
  public static async sendEmail(req: Request, res: Response) {
    try {
      const token = req.cookies.jwt || req.cookies.googlejwt;

      console.log(token);
      if (!token) {
        return res.status(401).json({ message: 'No token found' });
      }

      const decoded = jwt.verify(token, env.JWT_KEY) as {
        email: string;
      };

      const connectedUser = await userModel.findOne({
        email: decoded.email,
      });

      if (!connectedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      const transporter = nodemailer.createTransport({
        host: 'smtp-relay.sendinblue.com',
        port: 587,
        auth: {
          user: env.MAIL,
          pass: env.MAIL_PASSWORD,
        },
      });

      const { subject, message } = req.body;

      const mailOptions = {
        from: connectedUser.email,
        to: env.MAIL,
        subject: subject,
        text: message,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    }
  }
}

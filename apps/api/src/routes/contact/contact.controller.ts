import nodemailer from 'nodemailer';
import { Request, Response } from 'express';
import { env } from '../../tools';

export default class userController {
  // TODO: Finish the send email feature for users
  public static async sendEmail(req: Request, res: Response) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: env.MAIL,
          pass: env.MAIL_PASSWORD,
        },
      });

      const { email, subject, message } = req.body;

      const mailOptions = {
        from: email,
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

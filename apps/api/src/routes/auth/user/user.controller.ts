import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import { userModel } from '../../../models';
import { env } from '../../../tools';
import { v4 as uuidv4 } from 'uuid';

import validator from 'validator';
import sanitizeHtml from 'sanitize-html';

export default class userController {
  public static async sendVerificationEmail(req: Request, res: Response) {
    const { email } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: env.MAIL,
        pass: env.MAIL_PASSWORD,
      },
    });

    const token = jwt.sign({ email }, env.JWT_KEY);

    const mailOptions = {
      to: email,
      subject: 'Verify your account',
      attachments: [
        {
          filename: 'logo.png',
          path: '/Users/dak/Work/Mine/Chrysalis/apps/web/src/assets/logo.png',
          cid: 'logo',
        },
      ],
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify your account</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: #f6f6f6;
            font-family: Arial, sans-serif;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
          }
          .logo {
            display: block;
            margin: 0 auto;
            max-width: 200px;
            height: auto;
          }
          .title {
            font-size: 24px;
            margin-top: 20px;
            text-align: center;
            font-weight: bold;
          }
          .description {
            font-size: 16px;
            text-align: center;
            margin-top: 20px;
          }
          .verification-link {
            display: block;
            text-align: center;
            margin-top: 20px;
          }
          .verification-link a {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <img src="cid:logo" alt="Logo" class="logo">
          <p class="title">Créez votre compte Chrysalis</p>
          <p class="description">Cliquez sur le bouton ci-dessous pour vous connecter à votre compte Chrysalis. Ce lien expirera dans 10 minutes.</p>
          <div class="verification-link">
            <a href="http://localhost:3000/verify?token=${token}">Créer votre compte</a>
          </div>
        </div>
      </body>
      </html>
`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.json({ message: 'Verification email sent !', token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error sending verification email' });
    }
  }

  public static async handleVerificationLink(req: Request, res: Response) {
    const { token } = req.params;

    if (!token) {
      return res.status(401).json({ message: 'Missing token' });
    }

    try {
      const decoded = jwt.verify(token, env.JWT_KEY) as { email: string };
      const existingUser = await userModel.findOne({ email: decoded.email });

      if (existingUser) {
      } else {
        const uuid = uuidv4();

        const user = new userModel({
          _id: 'user_' + uuid,
          email: decoded.email,
          provider: 'email',
        });

        await user.save();
      }

      res.cookie('jwt', token, {
        httpOnly: false,
        sameSite: 'none',
        secure: true,
        domain: 'localhost',
      });

      return res.json({
        message: 'User registered successfully',
        email: decoded.email,
      });
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        return res.status(401).json({ message: 'Token has expired' });
      } else if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({ message: 'Invalid token' });
      } else {
        console.log('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    }
  }

  // FIXME: Token shows the first time but after is always undefined
  public static async getConnectedUser(req: Request, res: Response) {
    try {
      const token = req.cookies.jwt;
      console.log(token);
      if (!token) {
        return res.status(401).json({ message: 'No token found' });
      }

      const decoded = jwt.verify(token, env.JWT_KEY) as {
        sanitizedEmail: string;
      };
      const connectedUser = await userModel.findOne({
        email: decoded.sanitizedEmail,
      });

      if (!connectedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ connectedUser });
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        return res.status(401).json({ message: 'Token has expired' });
      } else if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({ message: 'Invalid token' });
      } else {
        console.log('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    }
  }

  public static async chooseRole(req: Request, res: Response) {
    const { email, role } = req.body;

    if (!email || !role) {
      return res.status(400).json({ message: 'Missing email or role' });
    }

    try {
      const existingUser = await userModel.findOne({ email });
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      existingUser.role = role;
      await existingUser.save();

      return res
        .status(200)
        .json({ message: 'User role updated successfully' });
    } catch (error) {
      console.log('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  public static async logout(_req: Request, res: Response) {
    res.clearCookie('jwt', { httpOnly: true });
    res.status(200).json({ message: 'Logged out successfully' });
  }
}

import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

import { Request, Response } from "express";
import { userModel } from "../../../models";
import { env } from "../../../tools";
import { v4 as uuidv4 } from "uuid";

export default class userController {
  public static async sendVerificationEmail(req: Request, res: Response) {
    const { email } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: env.MAIL,
        pass: env.MAIL_PASSWORD,
      },
    });

    const token = jwt.sign({ email }, env.JWT_KEY, { expiresIn: "1d" });

    const mailOptions = {
      to: email,
      subject: "Verify your account",
      html: `<div style="background-color: #f6f6f6; padding: 20px;">
      <img src="../../../../../web/src/assets/logo.png" alt="Logo" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
      <p style="font-size: 16px; margin-top: 20px; text-align: center;">Verify your account</p>
      <p style="font-size: 14px; text-align: center;">Click <a href="http://localhost:3000/verify?token=${token}">here</a> to verify your account.</p>
    </div>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.json({ message: "Verification email sent !", token });
    } catch (error) {
      res.status(500).json({ message: "Error sending verification email" });
    }
  }

  public static async handleVerificationLink(req: Request, res: Response) {
    const { token } = req.params;
    if (!token) {
      return res.status(401).json({ message: "Missing token" });
    }
    try {
      const decoded = jwt.verify(token, env.JWT_KEY) as { email: string };
      const existingUser = await userModel.findOne({ email: decoded.email });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      const user = new userModel({
        _id: uuidv4(),
        email: decoded.email,
        accessToken: token,
      });

      await user.save();

      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 86400000,
      });

      res.json({ message: "User registered successfully" });
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: "Invalid token" });
    }
  }

  public static async login(req: Request, res: Response) {
    const { email } = req.body;
    const user = await userModel.findOne({ email });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: env.MAIL,
        pass: env.MAIL_PASSWORD,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const mailOptions = {
      to: email,
      subject: "Sign in with magic link",
      html: `<div style="background-color: #f6f6f6; padding: 20px;">
        <img src="../../../../../web/src/assets/logo.png" alt="Logo" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
        <p style="font-size: 16px; margin-top: 20px; text-align: center;">Welcome back!</p>
        <p style="font-size: 14px; text-align: center;">Click <a href="http://localhost:3000/">here</a> to sign in.</p>
      </div>`,
    };

    await transporter.sendMail(mailOptions);

    res.json({
      message: "Authentication successful",
      token: user.accessToken,
    });
  }

  public static async checkLoginStatus(req: Request, res: Response) {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: 'Access token not found' });
    }
  
    try {
      const decoded = jwt.verify(token, env.JWT_KEY) as { email: string };
      res.status(200).json({ message: 'Authenticated', user: decoded.email });
    } catch (err) {
      res.status(401).json({ message: 'Invalid access token' });
    }
  }

  public static async logout(_req: Request, res: Response) { 
    res.clearCookie('access_token', { httpOnly: true });
    res.status(200).json({ message: 'Logged out successfully' });
  }
}

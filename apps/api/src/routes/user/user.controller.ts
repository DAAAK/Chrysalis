import { Request, Response } from 'express';

import { userModel } from '../../models';
import { env } from '../../tools';
import jwt from 'jsonwebtoken';

export default class userController {
  public static async getConnectedUser(req: Request, res: Response) {
    try {
      const token = req.cookies.jwt || req.cookies.googlejwt;

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
      return res.status(404).json({ message: 'Missing email or role' });
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
}

import { userModel } from "../../../models";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";

import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";

import { env } from "../../../utils";

export default class userController {
  private static signToken(user: { _id: string }) {
    return jwt.sign(
      {
        id: user._id,
      },
      env.JWT_KEY,
      { expiresIn: "1d" }
    );
  }

  public static async login(req: Request, res: Response): Promise<Response> {
    try {
      const user = await userModel.findOne({ email: req.body.email });
      if (!user) return res.status(401).json({ message: "Email not found!" });

      if (!(await user.passwordCompare(req.body.password))) {
        return res.status(401).json({ message: "Incorrect password!" });
      }

      const token = userController.signToken(user);

      res.cookie("access_token", token, {
        maxAge: 3600 * 1000 * 24,
        httpOnly: true,
      });
      return res.status(201).json({ success: true, token });
    } catch (error) {
      return res.status(400).send({ message: "Not able to login user!" });
    }
  }

  public static async register(req: Request, res: Response): Promise<Response> {
    try {

      const { name, email, password } = req.body;

      const uuid = uuidv4();

      const userWithSameEmail = await userModel.findOne({ email });
      if (userWithSameEmail) {
        return res.status(400).send({ message: "Email already exists!" });
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const verificationToken = crypto.randomBytes(16).toString("hex");

      const user = await userModel.create({
        _id: uuid,
        name,
        email,
        password: hashedPassword,
        verificationToken,
        verificationTokenExpires: Date.now() + 3600000,
        updatedAt: Date.now(),
        createdAt: Date.now(),
      });

      if (!user) {
        return res.status(400).send({ message: "User not created!" });
      }

      return res.status(201).send({ message: "User created!" });
    } catch (error) {
      return res.status(400).send({ message: "Not able to create user!" });
    }
  }
}

import User from "../../db/models/user.model";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import crypto from "crypto";

function sendResponse(res: Response, statusCode: number, message: string) {
  res.status(statusCode).json({ code: statusCode, message });
}

export default async function handler(req: Request, res: Response) {

  try {
    const { name, email, password } = req.body;

    const userWithSameEmail = await User.findOne({ email });
    if (userWithSameEmail) {
      sendResponse(res, 400, "Email already exists");
      return;
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const verificationToken = crypto.randomBytes(16).toString("hex");

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpires: Date.now() + 3600000,
      updatedAt: Date.now(),
      createdAt: Date.now(),
    });

    if (!user) {
      sendResponse(res, 400, "User not created");
      return;
    }

    sendResponse(res, 201, "User created");
  } catch (error) {
    console.error("Error: " + error);
    res.status(400).send({ code: 400, message: "Not able to create user" });
  }
}

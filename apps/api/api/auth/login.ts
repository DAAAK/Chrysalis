import User from "../../db/models/user.model";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";


const secret = "yoursecretkey";

const signToken = (user: { _id: string; password: string; email: string }) => {
  return jwt.sign(
    {
      sub: user._id,
      email: user.email,
      password: user.password,
    },
    secret,
    { expiresIn: "1d" }
  );
};

export default async function handler(req: Request, res: Response) {

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(401).json({ message: "Email not found" });
  if (!user.comparePassword(req.body.password)) {
    return res.status(401).json({ message: "Incorrect password" });
  }
  const token = signToken(user);
  res.cookie("access_token", token, {
    maxAge: 3600 * 1000 * 24,
    httpOnly: true,
  });
  return res.json({ success: true, token });
}

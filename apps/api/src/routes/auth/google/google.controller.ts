import { Request, Response } from "express";
import User from "../../../../db/models/user.model";
import jwt from "jsonwebtoken";
import axios from "axios";

import { config } from "../../../utils/env";

export interface UserPayload {
  id: string;
  name: string;
  email: string;
  picture: string;
}

export default class googleController {
  public static generateJWT = (user: UserPayload) => {
    const payload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      picture: user.picture,
    };
    const options = { expiresIn: "1h" };
    return jwt.sign(payload, config.JWT_KEY, options);
  };
}

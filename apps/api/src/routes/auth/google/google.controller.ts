import jwt from "jsonwebtoken";

import { config } from "../../../utils/env";

export default class googleController {
  public static generateJWT = (user: any) => {
    const { access_token, scope, token_type, id_token } = user as {
      access_token: string | undefined;
      scope: string;
      token_type: string;
      id_token: string;
    };
    const payload = {
      access_token: access_token ?? '',
      scope,
      token_type,
      id_token,
    };
    const options = { expiresIn: "1h" };
    return jwt.sign(payload, config.JWT_KEY, options);
  };
}

import jwt from "jsonwebtoken";
import { google } from "googleapis";
import { env } from "../../../utils";
import { userModel } from "../../../models";
import axios from "axios";
import { Request, Response } from "express";

export default class googleController {
  private static oauth2Client = new google.auth.OAuth2(
    env.GOOGLE_CLIENT_ID,
    env.GOOGLE_CLIENT_SECRET,
    env.GOOGLE_CALLBACK_URL,
  );

  private static auth = false;

  public static generateJWT = (user: any) => {
    const { access_token, scope, token_type, id_token } = user as {
      access_token: string | undefined;
      scope: string;
      token_type: string;
      id_token: string;
    };
    const payload = {
      access_token: access_token ?? "",
      scope,
      token_type,
      id_token,
    };
    const options = { expiresIn: "1h" };
    return jwt.sign(payload, env.JWT_KEY, options);
  };

  public static login(req: Request, res: Response) {
    if (googleController.auth) {
      res.redirect("http://localhost:3000/");
    } else {
      try {
        const redirectUrl = googleController.oauth2Client.generateAuthUrl({
          prompt: "consent",
          response_type: "code",
          scope: ["https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"],
        });

        res.redirect(redirectUrl);
      } catch (e) {
        console.log(e);
      }
    }
  }

  public static callback(req: Request, res: Response) {
    const code = req.query.code?.toString();
    if (code) {
      googleController.oauth2Client
        .getToken(code)
        .then(async function (getTokenResponse) {
          googleController.oauth2Client.setCredentials(getTokenResponse.tokens);

          const { data } = await axios.get(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: {
                Authorization: `Bearer ${getTokenResponse.tokens.access_token}`,
              },
            }
          );
          const { sub, email, name } = data;

          googleController.generateJWT(getTokenResponse.tokens);

          const userWithSameEmail = await userModel.findOne({ email });
          if (userWithSameEmail) {
            return res.redirect("http://localhost:3000/");
          }

          const user = await userModel.create({
            _id: sub,
            name: name,
            email: email,
            access_token: getTokenResponse.tokens.access_token,
            id_token: getTokenResponse.tokens.id_token,
            verificationTokenExpires: Date.now() + 3600000,
            updatedAt: Date.now(),
            createdAt: Date.now(),
          });

          if (!user) {
            return res.status(400).send({ message: "User not created" });
          }

          googleController.auth = true;

          res.redirect("http://localhost:3000/");
        })
        .catch(function (error) {
          console.error("Error getting token:", error);
          res.redirect("/error");
        });
    } else {
      res.redirect("/");
    }
  }

  public static async logout(req: Request, res: Response) {
    try {
      const accessToken = await googleController.oauth2Client.getAccessToken();
      if (accessToken) {
        await googleController.oauth2Client.revokeCredentials();
      }
    } catch (error) {
      console.error("Error revoking credentials:", error);
    }
    googleController.auth = false;
    res.redirect("http://localhost:3000/");
  }
}

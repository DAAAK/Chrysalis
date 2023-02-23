import { Router } from "express";
import googleController from "./google.controller";
import Google from "../../../../db/models/google.model";
import { google } from "googleapis";
import { config } from "../../../utils/env";
import passport from "passport";
import session from "express-session";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const router = Router();

declare module "express-session" {
  interface SessionData {
    user: string; // replace string with the type of your user object
  }
}

router.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

router.use(function (req, res, next) {
  if (req.user) {
    req.session.user = req.user as any;
    req.session.touch();
  }
  next();
});

router.use(passport.initialize());
router.use(passport.session());

let oauth2Client = new google.auth.OAuth2(
  config.GOOGLE_CLIENT_ID,
  config.GOOGLE_CLIENT_SECRET,
  config.GOOGLE_CALLBACK_URL
);

let auth = false;

router.get("/login", function (req, res) {
  if (auth) {
    // User is already authenticated, so redirect to homepage
    res.redirect("http://localhost:3000/");
  } else {
    // User is not authenticated, so redirect to Google login page
    try {
      const redirectUrl = oauth2Client.generateAuthUrl({
        prompt: "consent",
        response_type: "code",
        scope: ["https://www.googleapis.com/auth/userinfo.profile"],
      });

      res.redirect(redirectUrl);
    } catch (e) {
      console.log(e);
    }
  }
});

router.get("/callback", function (req, res) {
  const code = req.query.code?.toString();
  if (code) {
    oauth2Client
      .getToken(code)
      .then(async function (getTokenResponse) {
        oauth2Client.setCredentials(getTokenResponse.tokens);

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

        const userWithSameEmail = await Google.findOne({ email });
        if (userWithSameEmail) {
          return res.redirect("http://localhost:3000/");
        }

        const user = await Google.create({
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

        auth = true;

        res.redirect("http://localhost:3000/");
      })
      .catch(function (error) {
        console.error("Error getting token:", error);
        res.redirect("/error");
      });
  } else {
    res.redirect("/");
  }
});

router.get("/logout", async (req, res) => {
  try {
    const accessToken = await oauth2Client.getAccessToken();
    if (accessToken) {
      await oauth2Client.revokeCredentials();
    }
  } catch (error) {
    console.error("Error revoking credentials:", error);
  }
  auth = false;
  res.redirect("http://localhost:3000/");
});

export default router;

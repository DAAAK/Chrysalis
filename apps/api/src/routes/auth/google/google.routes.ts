import { Router } from "express";
import googleController, { UserPayload } from "./google.controller";
import { google } from "googleapis";
import { config } from "../../../utils/env";
import passport from "passport";
import session from "express-session";

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
    res.redirect("/callback");
  } else {
    // User is not authenticated, so redirect to Google login page
    try {
      const redirectUrl = oauth2Client.generateAuthUrl({
        prompt: "consent",
        response_type: "code",
        scope: ["https://www.googleapis.com/auth/userinfo.profile"],
      });

      console.log(redirectUrl);

      res.redirect(redirectUrl);
    } catch (e) {
      console.log(e)
    }
  }
});

router.get("/callback", function (req, res) {
  const code = req.query.code?.toString();
  if (code) {
    oauth2Client
      .getToken(code)
      .then(function (getTokenResponse) {
        oauth2Client.setCredentials(getTokenResponse.tokens);

        console.log(getTokenResponse.tokens)
        auth = true;

        res.redirect("/");
      })
      .catch(function (error) {
        console.error("Error getting token:", error);
        res.redirect("/error");
      });
  } else {
    res.redirect("/");
  }
});

router.get("/logout", (req, res) => {
  oauth2Client.revokeCredentials().then((r) => console.log("revoke ", r));
  auth = false;
  res.redirect("/");
});

export default router;

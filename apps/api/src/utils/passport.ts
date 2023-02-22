import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import Google from "../../db/models/google.model"
import { config } from "./env"

const GoogleStrategy = passportGoogle.Strategy;

interface User {
  id: string;
  name: string;
  email: string;
  picture: string;
}

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user as User);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: config.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
        const user = await Google.findOne({ googleId: profile.id });

        // If user doesn't exist creates a new user. (similar to sign up)
        if (!user) {
          const newUser = await Google.create({
            _id: profile.id,
            name: profile.displayName,
            email: profile.emails?.[0].value,
            // we are using optional chaining because profile.emails may be undefined.
          });
          if (newUser) {
            done(null, newUser);
          }
        } else {
          done(null, user);
        }
    }
  )
);
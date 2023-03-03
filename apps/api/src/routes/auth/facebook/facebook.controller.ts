import { Request, Response } from "express";
import { userModel } from "../../../models/";
import jwt from "jsonwebtoken";
import passport from "passport";
import { Strategy as facebookStrategy } from "passport-facebook";

const secret = "yoursecretkey";

export default class facebookController {
  facebookStrategy: any;

  constructor() {
    this.facebookStrategy = new facebookStrategy(
      {
        clientID:
          "918342807712-bm596db3hrspl3qijopivl9pmqqqr63q.apps.facebookusercontent.com",
        clientSecret: "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",
        callbackURL: "/auth/facebook/callback",
      },
      (
        accessToken: any,
        refreshToken: any,
        profile: any,
        done: (arg0: null, arg1: any) => void
      ) => {
        // This function will be called when the user is authenticated.
        // You can use the user's profile data to create a new user account or log in an existing user.
        // The "done" function should be called with the user object as the second argument.
        // If an error occurs during authentication, call the "done" function with the error as the first argument.
        done(null, profile);
      }
    );
    passport.use(this.facebookStrategy);
  }

  private static signToken(user: {
    _id: string;
    password: string;
    email: string;
  }): string {
    return jwt.sign(
      {
        sub: user._id,
        email: user.email,
        password: user.password,
      },
      secret,
      { expiresIn: "1d" }
    );
  }

  public static async login(req: Request, res: Response) {
    // if (req.user) {
    //   const token = jwt.sign({ id: req.user.id }, secret, {
    //     expiresIn: "1h",
    //   });
    //   return res.json({ token });
    // }

    // If the user is not authenticated, return an error.
    res.status(401).json({ message: "Authentication failed." });
  }

  public static async register(req: Request, res: Response) {
    passport.authenticate("facebook", { scope: ["profile", "email"] })(
      req,
      res
    );

    // const { id, displayName, emails, photos } = req.user;

    // Check if the user already exists in the database.
    // User.findOne({ facebookId: id }, (err: any, user: any) => {
    //   if (err) {
    //     return res.status(500).json({ message: "Internal server error." });
    //   }

    //   if (!user) {
    //     // If the user does not exist, create a new user in the database.
    //     // const email = emails[0].value;
    //     // const photo = photos[0].value;

    //     // const newUser = new User({
    //     //   facebookId: id,
    //     //   displayName,
    //     //   email,
    //     //   photo,
    //     // });

    //     // newUser.save((err: any) => {
    //     //   if (err) {
    //     //     return res.status(500).json({ message: "Internal server error." });
    //     //   }

    //     //   res.json({ user: newUser });
    //     // });
    //   } else {
    //     // If the user already exists, return the user object.
    //     res.json({ user });
    //   }
    // });
  }
}

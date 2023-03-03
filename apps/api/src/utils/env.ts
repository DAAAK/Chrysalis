import dotenv from "dotenv";

dotenv.config();

export const env = {
  MONGODB_URI: process.env.MONGODB_URI ? process.env.MONGODB_URI : "",

  PORT: process.env.PORT ? process.env.PORT : "8080",

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID ? process.env.GOOGLE_CLIENT_ID : "",
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET ? process.env.GOOGLE_CLIENT_SECRET : "",
  GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL ? process.env.GOOGLE_CALLBACK_URL : "",

  FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID ? process.env.FACEBOOK_CLIENT_ID : "",
  FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET ? process.env.FACEBOOK_CLIENT_SECRET : "",
  FACEBOOK_CALLBACK_URL: process.env.FACEBOOK_CALLBACK_URL ? process.env.FACEBOOK_CALLBACK_URL : "",

  JWT_KEY: process.env.JWT_KEY ? process.env.JWT_KEY : "",

  COOKIE_SECRET: process.env.COOKIE_SECRET ? process.env.COOKIE_SECRET : ""
};
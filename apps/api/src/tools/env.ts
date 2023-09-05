import dotenv from 'dotenv';

dotenv.config();

const env = {
  MONGODB_URI: process.env.MONGODB_URI ? process.env.MONGODB_URI : '',

  HOST: process.env.HOST ? process.env.HOST : 'localhost',
  PORT: process.env.PORT ? process.env.PORT : '8080',
  WEB_URL: process.env.WEB_URL ? process.env.WEB_URL : '',
  API_URL: process.env.API_URL ? process.env.API_URL : '',

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID
    ? process.env.GOOGLE_CLIENT_ID
    : '',
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
    ? process.env.GOOGLE_CLIENT_SECRET
    : '',
  GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL
    ? process.env.GOOGLE_CALLBACK_URL
    : '',

  FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID
    ? process.env.FACEBOOK_CLIENT_ID
    : '',
  FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET
    ? process.env.FACEBOOK_CLIENT_SECRET
    : '',
  FACEBOOK_CALLBACK_URL: process.env.FACEBOOK_CALLBACK_URL
    ? process.env.FACEBOOK_CALLBACK_URL
    : '',

  JWT_KEY: process.env.JWT_KEY ? process.env.JWT_KEY : '',

  NODEMAILER_MAIL: process.env.NODEMAILER_MAIL
    ? process.env.NODEMAILER_MAIL
    : '',
  NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD
    ? process.env.NODEMAILER_PASSWORD
    : '',
  NODEMAILER_API_KEY: process.env.NODEMAILER_API_KEY
    ? process.env.NODEMAILER_API_KEY
    : '',

  MAIL: process.env.MAIL ? process.env.MAIL : '',
  MAIL_HOST: process.env.MAIL_HOST ? process.env.MAIL_HOST : '',
  MAIL_PORT: process.env.MAIL_PORT ? process.env.MAIL_PORT : '587',
  NO_REPLY_MAIL: process.env.NO_REPLY_MAIL ? process.env.NO_REPLY_MAIL : '',
};

export default env;

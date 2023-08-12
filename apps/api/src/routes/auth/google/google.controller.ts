import jwt from 'jsonwebtoken';
import { userModel } from '../../../models';
import { env } from '../../../tools';
import { Request, Response } from 'express';
import axios from 'axios';
import { OAuth2Client } from 'google-auth-library';

// FIXME: After sso complete fix web redirection
class GoogleController {
  public static async login(req: Request, res: Response) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Referrer-Policy', 'no-referrer-when-downgrade');

    const oAuth2Client = new OAuth2Client(
      env.GOOGLE_CLIENT_ID,
      env.GOOGLE_CLIENT_SECRET,
      env.GOOGLE_CALLBACK_URL
    );

    const authorizeUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope:
        'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid',
      prompt: 'consent',
    });

    res.json({
      url: authorizeUrl,
    });
  }

  public static async getUserData(access_token: string) {
    const response = await axios.post(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token${access_token}`
    );
    const data = response.data;
    console.log('data: ', data);
  }

  public static async callback(req: Request, res: Response) {
    const code = req.query.code as string;
    console.log(code);

    try {
      const oAuth2Client = new OAuth2Client(
        env.GOOGLE_CLIENT_ID,
        env.GOOGLE_CLIENT_SECRET,
        env.GOOGLE_CALLBACK_URL
      );

      const response = await oAuth2Client.getToken(code);
      await oAuth2Client.setCredentials(response.tokens);
      console.log('tokens acquired');
      const user = oAuth2Client.credentials;
      console.log('credentials: ', user);
      await this.getUserData(user.access_token as string);
    } catch (e) {
      console.log('Error: ', e);
    }
    res.redirect('http://localhost:3000/');
  }
}

export default GoogleController;

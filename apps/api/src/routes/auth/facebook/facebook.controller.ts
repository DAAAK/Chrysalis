import { Request, Response } from 'express';
import { userModel } from '../../../models/';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { env } from '../../../tools';
import queryString from 'query-string';

// FIXME: Login page is here but i still need to fix the redirect uri to redirect to an http one
export default class facebookController {
  private static async getAccessToken(code: string) {
    const { data } = await axios({
      url: 'https://graph.facebook.com/v4.0/oauth/access_token',
      method: 'get',
      params: {
        client_id: env.FACEBOOK_CLIENT_ID,
        client_secret: env.FACEBOOK_CLIENT_SECRET,
        redirect_uri: env.FACEBOOK_CALLBACK_URL,
        code,
      },
    });
    console.log(data);
    return data.access_token;
  }

  private static async getFacebookUserData(access_token: string) {
    const { data } = await axios({
      url: 'https://graph.facebook.com/me',
      method: 'get',
      params: {
        fields: ['id', 'email', 'first_name', 'last_name'].join(','),
        access_token,
      },
    });
    return data;
  }

  public static async login(req: Request, res: Response) {
    const url = 'https://www.facebook.com/v4.0/dialog/oauth';
    const options = {
      client_id: env.FACEBOOK_CLIENT_ID,
      redirect_uri: env.FACEBOOK_CALLBACK_URL,
      scope: ['email', 'user_friends'].join(','),
      response_type: 'code',
      auth_type: 'rerequest',
      display: 'popup',
    };

    const qs = new URLSearchParams(options);

    res.send(`${url}?${qs.toString()}`);
  }

  public static async callback(req: Request, res: Response) {
    try {
      const { code } = req.query;
      const tokenResponse = await facebookController.getAccessToken(
        code as string
      );
      const userInfo = await facebookController.getFacebookUserData(
        tokenResponse.access_token
      );

      console.log('info ', userInfo);
      const existingUser = await userModel.findOne({ email: userInfo.email });

      if (!existingUser) {
        const newUser = new userModel({
          _id: 'google_' + userInfo.id,
          email: userInfo.email,
          provider: 'google',
        });

        await newUser.save();

        const jwtToken = jwt.sign({ email: userInfo.email }, env.JWT_KEY);

        res.cookie('facebookjwt', jwtToken, {
          httpOnly: false,
          sameSite: 'none',
          secure: true,
          domain: 'localhost',
        });

        return res.redirect('http://localhost:3000/role');
      }

      const isGoogleAuthenticated = !!existingUser;

      const jwtToken = jwt.sign(
        { email: userInfo.email, isGoogleAuthenticated },
        env.JWT_KEY
      );

      res.cookie('googlejwt', jwtToken, {
        httpOnly: false,
        sameSite: 'none',
        secure: true,
        domain: 'localhost',
      });

      return res.redirect('http://localhost:3000/');
    } catch (error) {
      console.error('Error during Google OAuth callback:', error);
      return res.redirect('/error');
    }
  }

  public static async logout(req: Request, res: Response) {
    res.clearCookie('facebookjwt', { httpOnly: false });
    res.status(200).json({ message: 'Logged out successfully' });
  }
}

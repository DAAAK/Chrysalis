import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { env } from '../../../tools';
import prisma from '../../../../prisma';

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
      const existingUser = await prisma.user.findUnique({
        where: { email: userInfo.email },
      });

      if (!existingUser) {
        await prisma.user.create({
          data: {
            id: 'facebook_' + userInfo.id,
            email: userInfo.email,
            provider: 'facebook',
          },
        });

        const jwtToken = jwt.sign({ email: userInfo.email }, env.JWT_KEY);

        res.cookie('jwt', jwtToken, {
          httpOnly: false,
          sameSite: 'none',
          secure: true,
          domain: 'localhost',
        });

        return res.redirect('http://localhost:3000/role');
      }

      const isFacebookAuthenticated = !!existingUser;

      const jwtToken = jwt.sign(
        { email: userInfo.email, isFacebookAuthenticated },
        env.JWT_KEY
      );

      res.cookie('jwt', jwtToken, {
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
}

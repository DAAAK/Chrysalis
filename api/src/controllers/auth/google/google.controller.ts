import { Request, Response } from 'express';
import { env } from '../../../tools';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import prisma from '../../../../prisma';

export default class googleController {
    private static async exchangeCodeForTokens(authorizationCode: string) {
        const tokenUrl = 'https://oauth2.googleapis.com/token';

        const tokenParams = new URLSearchParams({
            code: authorizationCode,
            client_id: env.GOOGLE_CLIENT_ID,
            client_secret: env.GOOGLE_CLIENT_SECRET,
            redirect_uri: env.GOOGLE_CALLBACK_URL,
            grant_type: 'authorization_code',
        });

        const response = await axios.post(tokenUrl, tokenParams.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        return response.data;
    }

    private static async getUserInfoFromGoogle(accessToken: string) {
        const userInfoUrl = 'https://www.googleapis.com/oauth2/v2/userinfo';

        const response = await axios.get(userInfoUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data;
    }

    public static async login(req: Request, res: Response) {
        const url = 'https://accounts.google.com/o/oauth2/v2/auth';

        const options = {
            redirect_uri: env.GOOGLE_CALLBACK_URL,
            client_id: env.GOOGLE_CLIENT_ID,
            access_type: 'offline',
            response_type: 'code',
            prompt: 'consent',
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email',
            ].join(' '),
        };

        const qs = new URLSearchParams(options);

        res.send(`${url}?${qs.toString()}`);
    }

    public static async callback(req: Request, res: Response) {
        try {
            const { code } = req.query;
            const tokenResponse = await googleController.exchangeCodeForTokens(
                code as string
            );
            const userInfo = await googleController.getUserInfoFromGoogle(
                tokenResponse.access_token
            );

            const existingUser = await prisma.user.findUnique({
                where: { email: userInfo.email },
            });
            if (!existingUser) {
                await prisma.user.create({
                    data: {
                        id: 'google_' + userInfo.id,
                        email: userInfo.email,
                        accessToken: tokenResponse.access_token,
                        refreshToken: tokenResponse.refresh_token,
                        provider: 'google',
                    },
                });

                const jwtToken = jwt.sign(
                    { email: userInfo.email },
                    env.JWT_KEY,
                    {
                        expiresIn: '1h',
                    }
                );

                res.cookie('jwt', jwtToken, {
                    httpOnly: false,
                    sameSite: 'none',
                    secure: true,
                    domain: 'localhost',
                });

                return res.redirect('http://localhost:3000/role');
            }

            const jwtToken = jwt.sign({ email: userInfo.email }, env.JWT_KEY, {
                expiresIn: '1h',
            });

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

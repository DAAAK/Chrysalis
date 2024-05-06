import { Request, Response, NextFunction } from 'express';
import jwt, { TokenExpiredError } from 'jsonwebtoken';
import env from './env';

function clearExpiredCookie(req: Request, res: Response, next: NextFunction) {
    try {
        const jwtToken = req.cookies.jwt;

        if (jwtToken) {
            try {
                const decodedToken = jwt.verify(jwtToken, env.JWT_KEY) as {
                    exp: number;
                };

                if (decodedToken.exp * 1000 < Date.now()) {
                    // Token is expired, clear the cookie
                    res.clearCookie('jwt', {
                        httpOnly: false,
                        sameSite: 'none',
                        secure: true,
                        domain: 'localhost',
                    });
                }
            } catch (error) {
                if (error instanceof TokenExpiredError) {
                    // Handle TokenExpiredError (JWT has expired)
                    res.clearCookie('jwt', { domain: 'localhost' });
                } else {
                    throw error; // Rethrow other errors for global error handling
                }
            }
        }
    } catch (error) {
        console.error('Error clearing expired cookie:', error);
    }

    next();
}

export default clearExpiredCookie;

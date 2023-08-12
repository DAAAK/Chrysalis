import { Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import env from './env';

const verifyToken = (req: Request, res: Response, next: Function) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(407).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, env.JWT_KEY) as { email: string };
    req.user = decoded;
    next();
  } catch (error) {
    console.log('Error:', error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default verifyToken;

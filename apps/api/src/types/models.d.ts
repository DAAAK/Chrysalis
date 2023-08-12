import { Document } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  email: string;
  accessToken?: string;
  accessTokenExpiresAt?: Date;
  refreshToken?: string;
  refreshTokenExpiresAt?: Date;
  provider: 'email' | 'google' | 'facebook';
  googleId?: string;
  facebookId?: string;
  role: UserRole;
}

export enum UserRole {
  User = 'user',
  Admin = 'admin',
}

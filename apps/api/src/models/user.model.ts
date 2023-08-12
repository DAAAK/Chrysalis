import { Schema, model } from 'mongoose';
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
  role: EUserRole;
}

export enum EUserRole {
  User = 'user',
  Admin = 'admin',
}

const userSchema = new Schema({
  _id: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  accessToken: { type: String },
  accessTokenExpiresAt: { type: Date },
  refreshToken: { type: String },
  refreshTokenExpiresAt: { type: Date },
  provider: {
    type: String,
    enum: ['email', 'google', 'facebook'],
    required: true,
  },
  googleId: { type: String },
  facebookId: { type: String },
  role: { type: String, enum: Object.values(EUserRole), required: true },
});

const UserModel = model<IUser>('User', userSchema);

export default UserModel;

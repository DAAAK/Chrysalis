import { Schema, model, Document } from "mongoose";
import { IUser } from "../types";
import bcrypt from "bcrypt";

interface UserDocument extends Document, Omit<IUser, "_id"> {
  passwordCompare: (plainPassword: string) => Promise<boolean>;
}

const schema = new Schema<UserDocument>(
  {
    _id: String,
    name: String,
    email: String,
    password: String,
    access_token: String,
    id_token: String,
    verificationTokenExpires: Date,
    updatedAt: Date,
    createdAt: Date,
  },
  { versionKey: false }
);

schema.methods.passwordCompare = async function (
  plainPassword: string
): Promise<boolean> {
  try {
    return await bcrypt.compare(plainPassword, this.password);
  } catch (error) {
    throw error;
  }
};

export default model<UserDocument>("User", schema);

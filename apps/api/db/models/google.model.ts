import mongoose from "mongoose";
import bcrypt from "bcrypt";

const googleSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  access_token: {
    type: String,
  },
  id_token: {
    type: String,
  },
  verificationTokenExpires: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Google || mongoose.model("Google", googleSchema);

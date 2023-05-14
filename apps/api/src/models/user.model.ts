import { Schema, model } from "mongoose";

const userSchema = new Schema({
  _id: { type: String, required: true },
  email: { type: String, required: true },
  accessToken: { type: String },
  accessTokenExpiresAt: { type: Date },
  refreshToken: { type: String },
  refreshTokenExpiresAt: { type: Date },
  // roles: [{ type: String }],
  // lastLoginAt: { type: Date }
});

// userSchema.methods.addRole = function (role: string) {
//   this.roles.push(role);
// };

// userSchema.methods.setLastLogin = function () {
//   this.lastLoginAt = new Date();
// };

const User = model("User", userSchema);

export default User;

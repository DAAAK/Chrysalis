export interface userAccounts {
  _id: string;
  name: string;
  email: string;
  password: string;
  access_token: string;
  id_token: string;
  verificationTokenExpires: Date;
  updatedAt: Date;
  createdAt: Date;
}
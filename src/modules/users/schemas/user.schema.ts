import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  user: String,
  password: String,
});

import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    username: { type: String, unique: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    age: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<User>("user", userSchema);

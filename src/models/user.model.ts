import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const userSchema = new Schema<User>({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: false }
}, {
    timestamps: true,
    versionKey: false
});

export default model<User>("user", userSchema);
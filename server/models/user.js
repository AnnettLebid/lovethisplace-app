import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  givenName: { type: String, required: true },
  familyName: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String }
})

const User = mongoose.model("User", userSchema);

export default User;
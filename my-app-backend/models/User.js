const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phno: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  dob: { type: Date, required: true }, // Date of Birth
  userType: { type: String, enum: ["user", "provider"], required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  password: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model("User", userSchema, "User"); 

module.exports = User;
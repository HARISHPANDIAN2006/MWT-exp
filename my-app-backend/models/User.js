const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  phno: { type: String },
  email: { type: String, required: true, unique: true },
  userType: { type: String, enum: ["user", "provider"], required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema, "User"); // use existing "User" collection

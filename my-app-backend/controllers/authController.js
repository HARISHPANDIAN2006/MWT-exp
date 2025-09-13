const User = require("../models/User");

// ✅ Register User
const registerUser = async (req, res) => {
  const {
    firstname,
    lastname,
    phno,
    email,
    username,
    dob,
    userType,
    gender,
    password,
    confirmPassword,
  } = req.body;

  try {
    // 1. Check if user already exists (by username/email/phone)
    const existingUser = await User.findOne({
      $or: [{ username }, { email }, { phno }],
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with same username, email, or phone already exists" });
    }

    // 2. Check password match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // 3. Create new user
    const newUser = new User({
      firstname,
      lastname,
      phno,
      email,
      username,
      dob,
      userType,
      gender,
      password, // ⚠️ plaintext (not safe for production)
    });

    // 4. Save user to DB
    await newUser.save();

    // 5. Response
    res.status(201).json({
      message: "✅ User registered successfully",
      user: {
        username: newUser.username,
        email: newUser.email,
        phno: newUser.phno,
        userType: newUser.userType,
      },
    });
  } catch (error) {
    console.error("❌ Register Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Login User
const loginUser = async (req, res) => {
  const { username, email, phno, password } = req.body;

  try {
    // 1. Match user with username/email/phone
    const user = await User.findOne({ username, email, phno });

    if (!user) {
      return res
        .status(404)
        .json({ message: "❌ User not found or details mismatch" });
    }

    // 2. Check password
    if (user.password !== password) {
      return res.status(401).json({ message: "⚠️ Invalid password" });
    }

    req.session.user = {
      username: user.username,
      email: user.email,
      phno: user.phno,
    };

    // 3. Success response
    res.json({
      message: "✅ Login successful",
      user: {
        username: user.username,
        email: user.email,
        phno: user.phno,
        userType: user.userType,
      },
    });
  } catch (error) {
    console.error("❌ Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser, loginUser };

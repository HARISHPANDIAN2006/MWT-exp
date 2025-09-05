const User = require("../models/User");

const loginUser = async (req, res) => {
  const { username, email, phno, password } = req.body;

  try {
    const user = await User.findOne({ username, email, phno });

    if (!user) {
      return res.status(404).json({ message: "User not found or details mismatch" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.json({
      message: "Login successful",
      user: {
        username: user.username,
        email: user.email,
        phno: user.phno,
        userType: user.userType,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { loginUser };

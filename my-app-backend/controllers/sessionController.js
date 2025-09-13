
const getSessionUser = (req, res) => {
  if (req.session.user) {
    return res.json({ user: req.session.user });
  }
  return res.status(401).json({ message: "Not logged in" });
};

const destroySession = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    res.clearCookie("connect.sid"); 
    res.json({ message: "Logged out successfully" });
  });
};

module.exports = {
  getSessionUser,
  destroySession,
};

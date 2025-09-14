const express = require("express");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

// ✅ CORS setup so React frontend can send cookies
app.use(
  cors({
    origin: "http://localhost:5173", // React frontend URL
    credentials: true, // allow cookies
  })
);

// ✅ Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET, // keep it safe
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // true if using https
    maxAge: 1000 * 60 * 60, // 1 hour
  },
}));

// ✅ Connect to DB
connectDB();

// ✅ Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/session", require("./routes/sessionRoutes"));
app.use("/api/guides", require("./routes/guideRoutes"));
app.use("/api/otp", require("./routes/otpRoutes"));
app.use("/api/forget", require("./routes/forgetRoutes"));
app.use("/api/businesses", require("./routes/businessRoutes"));
app.use("/api/subcategory", require("./routes/subcategoryRoutes"));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);

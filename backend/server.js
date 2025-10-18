const express = require("express");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();
const connectDB = require("./config/db");
const Razorpay = require('razorpay');

const app = express();

// ✅ CORS setup so React frontend can send cookies
app.use(
  cors({
    origin: "http://localhost:3000", // React frontend URL
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
    secure: false,
    sameSite: "lax", 
    maxAge: 1000 * 60 * 60, // 1 hour
  },
}));

// ✅ Connect to DB
connectDB();


const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,      // from .env
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

app.post("/api/payment/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || isNaN(amount)) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const options = {
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: "receipt_" + Date.now(),
      payment_capture: 1,
      notes: {
        payment_for: "Freelance Marketplace",
      },
      method: "upi"
    };

    const order = await razorpay.orders.create(options);
    console.log("✅ Razorpay order created:", order);
    return res.json({ order, key: process.env.RAZORPAY_KEY_ID });
  } catch (err) {
    console.error("❌ Razorpay API Error:", err);
    return res.status(500).json({ error: err.message || "Failed to simulate orders" });
  }
});



// ✅ Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/session", require("./routes/sessionRoutes"));
app.use("/api/guides", require("./routes/guideRoutes"));
app.use("/api/otp", require("./routes/otpRoutes"));
app.use("/api/forget", require("./routes/forgetRoutes"));
app.use("/api/subcategory", require("./routes/subcategoryRoutes"));
app.use("/api/userprofile", require("./routes/userProfileRoutes"));
app.use("/api/business",require("./routes/businessRoutes"));
app.use("/api/businesslist", require("./routes/businesslistRoutes"));

// ✅ Start server
const PORT = process.env.PORT || 5024;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);

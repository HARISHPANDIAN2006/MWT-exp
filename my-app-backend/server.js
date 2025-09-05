const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const app = express();
app.use(cors());
app.use(express.json());

// connect
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Atlas connected successfully!"))
.catch((err) => console.error("❌ MongoDB connection failed:", err.message));

// schema must match your collection fields
const ServiceSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

// explicitly tell Mongoose the collection name is "services"
const Service = mongoose.model("Service", ServiceSchema, "services");

app.get("/api/services", async (req, res) => {
  try {
    // fetch only "title" field
    const services = await Service.find({}, "title");
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const GuideSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
});

const Guide = mongoose.model("guides", GuideSchema);

// ADD THIS ROUTE
app.get("/api/guides", async (req, res) => {
  try {
    const guides = await Guide.find();
    res.json(guides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  phno: { type: String },
  email: { type: String, required: true, unique: true },
  userType: { type: String, enum: ["user", "provider"], required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema, "User");

// Login API
app.post("/api/login", async (req, res) => {
  const { username, email, phno, password } = req.body;

  try {
    // Step 1: Find user with username, email, and mobile
    const user = await User.findOne({ username, email, phno });

    if (!user) {
      console.log(`❌ User "${username}" with given email & phone not found`);
      return res.status(404).json({ message: "User not found or details mismatch" });
    }

    // Step 2: Verify password
    if (user.password !== password) {
      console.log(`⚠️ Invalid password for user "${username}"`);
      return res.status(401).json({ message: "Invalid password" });
    }

    console.log(`✅ User "${username}" logged in successfully!`);

    // Step 3: Send response
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
    console.error("❌ Error during login:", error);
    res.status(500).json({ message: "Server error" });
  }
});



app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));

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
    console.log(guides);
    res.json(guides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));

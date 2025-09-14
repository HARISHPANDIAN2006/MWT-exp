const mongoose = require("mongoose");

const SubcategorySchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  homeImage: { type: String }, // image for main listing
  subcategories: [SubcategorySchema], // array of subcategories
}, { timestamps: true });

module.exports = mongoose.model("Service", ServiceSchema, "services");

const mongoose = require("mongoose");

const serviceFaqSchema = new mongoose.Schema({
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true }
});

module.exports = mongoose.model("ServiceFaq", serviceFaqSchema, "servicefaqs");

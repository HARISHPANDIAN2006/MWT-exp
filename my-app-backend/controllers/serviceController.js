const mongoose = require("mongoose");
const Service = require("../models/Service");
const ServiceFaq = require("../models/servicefaqs");
const ServiceTag = require("../models/servicetags");
const TopCategory = require("../models/ServiceTopCategory");

const getServices = async (req, res) => {
  try {
    const services = await Service.find({}, "title");
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get FAQs for a service
const getServicefaqsById = async (req, res) => {
  try {
    const faqs = await ServiceFaq.find({ serviceId: req.params.id });
    if (!faqs || faqs.length === 0) {
      return res.status(404).json({ error: "No FAQs found for this service" });
    }
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ error: "Error fetching FAQs" });
  }
};

// Get Tags for a service
const getServicetagsById = async (req, res) => {
  try {
    const tags = await ServiceTag.find({ serviceId: req.params.id });
    if (!tags || tags.length === 0) {
      return res.status(404).json({ error: "No Tags found for this service" });
    }
    res.json(tags);
  } catch (err) {
    res.status(500).json({ error: "Error fetching Tags" });
  }
};

const getTopCategoryById = async (req, res) => {
  try {
    const serviceObjectId = new mongoose.Types.ObjectId(req.params.id);

    const categories = await TopCategory.find({ serviceId: serviceObjectId });

    if (!categories || categories.length === 0) {
      return res.status(404).json({ error: "No Top Categories found for this service" });
    }

    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: "Error fetching Top Categories" });
  }
};

module.exports = { getServices,getServiceById,getServicefaqsById,getServicetagsById,getTopCategoryById };

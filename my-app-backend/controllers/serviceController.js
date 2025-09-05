const Service = require("../models/Service");

const getServices = async (req, res) => {
  try {
    const services = await Service.find({}, "title");
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getServices };

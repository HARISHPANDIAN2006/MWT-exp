const BusinessList = require("../models/BusinessList");

// ✅ Fetch business details by ID
exports.getBusinessById = async (req, res) => {
  try {
    const { id } = req.params;
    const business = await BusinessList.findById(id);

    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }

    res.status(200).json(business);
  } catch (err) {
    console.error("Error fetching business:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

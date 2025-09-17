const mongoose = require("mongoose");

const BusinessCategorySchema = new mongoose.Schema({
  mainCategory: String,
  subCategories: [
    {
      name: String,
      path: String,
    },
  ],
});
module.exports = mongoose.model("BusinessCategory", BusinessCategorySchema, "BusinessCategory");
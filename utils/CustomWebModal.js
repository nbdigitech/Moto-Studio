// create user model for mongo db
const mongoose = require("mongoose");

const customWebSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    websitename: {
      type: String,
      required: true,
    },
    websiteurl: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    aadhar: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const CustomWebModal =
  mongoose.models.customWeb || mongoose.model("customWeb", customWebSchema);

module.exports = CustomWebModal;

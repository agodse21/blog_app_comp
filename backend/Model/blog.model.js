const mongoose = require("mongoose");
const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    img: { type: String },
    userId: { type: String },
  },
  {
    timestamps: true,
  }
);

const BlogModel = mongoose.model("Blogs", BlogSchema);

module.exports = {
  BlogModel,
};

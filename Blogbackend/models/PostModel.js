const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: String,
  title: String,
  desc: String,
});

module.exports = mongoose.model("posts", postSchema);

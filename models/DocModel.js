const mongoose = require("mongoose"); //import mongoose

// tea schema
const docSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: String,
});

module.exports = mongoose.model("Doc", docSchema);

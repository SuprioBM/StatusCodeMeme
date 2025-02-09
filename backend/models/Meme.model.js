const mongoose = require("mongoose");

const MemeSchema = mongoose.Schema(
  {
    code: {
      type: Number,
      required: [true, "Please enter status code"],
      unique: true,
      trim: true
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Meme = mongoose.model("Meme", MemeSchema);

module.exports = Meme;

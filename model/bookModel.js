const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refs: "userModel",
    },
    title: {
      type: String,
      required: [true, "Enter the book name"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("books", bookSchema);

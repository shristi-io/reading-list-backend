const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add username"],
    },
    email: {
      type: String,
      required: [true, "Please add email"],
      unique: [true, "Email already registered"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);

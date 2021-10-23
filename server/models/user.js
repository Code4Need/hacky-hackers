const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: [true, "Please Enter your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter Valid Email Address"],
  },
  role: {
    type: String,
    default: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});



//Return JWT_TOKEN
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });
};



module.exports = mongoose.model("User", userSchema);

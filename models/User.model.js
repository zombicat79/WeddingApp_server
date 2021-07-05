const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  language: String,
  correctAnswers: {
    total: Number,
    questions: Array
  },
  points: Number,
  productsAcquired: Array,
  productsInCart: Array,
  sumSpent: Number,
  music: Array,
  allergies: Array,
  lodging: {
    need: Boolean,
    nights: Number
  }
});

const User = model("User", userSchema);

module.exports = User;

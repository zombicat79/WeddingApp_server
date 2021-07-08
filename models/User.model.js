const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  casualName: String,
  language: String,
  correctAnswers: {
    total: Number,
    questions: [{ type: Schema.Types.ObjectId, ref: "Question" }]
  },
  points: Number,
  productsAcquired: [{ type: Schema.Types.ObjectId, ref: "Product"}],
  productsInCart: [{ type: Schema.Types.ObjectId, ref: "Product"}],
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

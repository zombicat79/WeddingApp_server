const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  casualName: String,
  lastName: String,
  language: String,
  logins: Number,
  questionPref: String,
  correctAnswers: {
    total: Number,
    questions: [{ type: Schema.Types.ObjectId, ref: "Question" }]
  },
  wrongAnswers: {
    total: Number,
    questions: [{ type: Schema.Types.ObjectId, ref: "Question" }]
  },
  remainingQuestions: Boolean,
  points: Number,
  productsAcquired: [{ type: Schema.Types.ObjectId, ref: "Product"}],
  productsInCart: Schema.Types.Mixed,
  sumSpent: Number,
  music: Array,
  allergies: Array,
  kids: Schema.Types.Mixed,
  attending: Boolean,
  needsLodging: Boolean
});

const User = model("User", userSchema);

module.exports = User;

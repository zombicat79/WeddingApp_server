const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema ({
    body: String,
    possibleAnswers: Array,
    points: Number
})

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema ({
    body: {
        cat: String,
        esp: String,
        eng: String
    },
    subject: String,
    possibleAnswers: [{
        cat: String,
        esp: String,
        eng: String
    }],
    intLevel: Number,
    points: Number,
    penalty: Number,
    rightAnswer: Number,
    response: {
        cat: String,
        esp: String,
        eng: String
    }
})

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
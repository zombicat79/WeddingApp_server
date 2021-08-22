const express = require('express');
const questionRouter = express.Router();

const Question = require('./../../models/Question.model');

questionRouter.get('/getAll', (req, res, next) => {
    Question.find()
        .then((allQuestions) => res.status(200).json(allQuestions))
        .catch((err) => next(err));
});

module.exports = questionRouter;